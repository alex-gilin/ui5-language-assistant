import { expect } from "chai";
import { difference, partial } from "lodash";

import {
  UI5Aggregation,
  UI5Association,
  UI5Class,
  UI5EnumValue,
  UI5Event,
  UI5Namespace,
  UI5Prop,
  UI5SemanticModel
} from "@ui5-editor-tools/semantic-model-types";
import { testSuggestionsScenario } from "../../utils";
import {
  expectSuggestions,
  expectXMLAttribute,
  generateModel
} from "@ui5-editor-tools/test-utils";
import {
  getNamespaceKeyPrefix,
  isExistingNamespaceAttribute,
  namespaceKeysSuggestions
} from "../../../src/providers/attributeName/namespace";
import { XMLAttribute, XMLDocument, XMLElement } from "@xml-tools/ast";
import { ui5NodeToFQN } from "@ui5-editor-tools/logic-utils";

const ui5SemanticModel: UI5SemanticModel = generateModel("1.74.0");

const allExpectedNamespaces = [
  "sap.f",
  "sap.f.cards",
  "sap.f.dnd",
  "sap.f.semantic",
  "sap.m",
  "sap.m.plugins",
  "sap.m.semantic",
  "sap.m.upload",
  "sap.tnt",
  "sap.ui.codeeditor",
  "sap.ui.commons",
  "sap.ui.commons.form",
  "sap.ui.commons.layout",
  "sap.ui.core",
  "sap.ui.core.dnd",
  "sap.ui.core.search",
  "sap.ui.core.tmpl",
  "sap.ui.core.util",
  "sap.ui.fl.variants",
  "sap.ui.layout",
  "sap.ui.layout.cssgrid",
  "sap.ui.layout.form",
  "sap.ui.core.mvc",
  "sap.ui.suite",
  "sap.ui.table",
  "sap.ui.table.plugins",
  "sap.ui.table.rowmodes",
  "sap.ui.unified",
  "sap.ui.unified.calendar",
  "sap.ui.ux3",
  "sap.uxap"
];

const expectNamespaceKeysSuggestions = partial(expectSuggestions, _ => {
  expectUI5Namespace(_.ui5Node);
  expectXMLAttribute(_.astNode);
  return ui5NodeToFQN(_.ui5Node);
});

describe("The ui5-editor-tools xml-views-completion", () => {
  context("namespaces", () => {
    context("applicable scenarios", () => {
      it("will suggest when 'xmlns' prefix provided", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns⇶
          xmlns:mvc="sap.ui.core.mvc">
        </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceKeysSuggestions(
              suggestions,
              difference(allExpectedNamespaces, ["sap.ui.core.mvc"])
            );
          }
        });
      });

      it("will suggest when 'xmlns:' prefix provided", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:⇶
          xmlns="sap.m" enable="true">
        </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceKeysSuggestions(
              suggestions,
              difference(allExpectedNamespaces, ["sap.m", "sap.ui.core.mvc"])
            );
          }
        });
      });

      it("will suggest when 'xmlns:u' prefix provided", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:u⇶
          xmlns="sap.m" 
          xmlns:suite="">
        </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expectNamespaceKeysSuggestions(suggestions, [
              "sap.m.upload",
              "sap.ui.core.util",
              "sap.ui.ux3",
              "sap.uxap",
              "sap.ui.unified"
            ]);
          }
        });
      });
    });

    describe("the prefix namespace completions utilities", () => {
      it("will not suggest when used on not applicable attribute key prefix ('xm')", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xm⇶
          xmlns:m>
        </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expect(suggestions).to.be.empty;
          }
        });
      });

      it("will not suggest when used on element that is not View", () => {
        const xmlSnippet = `
        <mvc:Controller
          xmlns:mvc="sap.ui.core.mvc"
          xmlns⇶>
        </mvc:Controller>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expect(suggestions).to.be.empty;
          }
        });
      });

      it("will not suggest when used on undefined attribute key prefix", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          ⇶
          xmlns="sap.m">
        </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expect(suggestions).to.be.empty;
          }
        });
      });

      it("will not suggest when used on unknown element", () => {
        const xmlSnippet = `
        <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m">
            <Page1 xmlns:⇶>

            </Page1>
          </mvc:View>`;
        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeName: [namespaceKeysSuggestions]
          },
          assertion: suggestions => {
            expect(suggestions).to.be.empty;
          }
        });
      });
    });

    context("not reproducible scenario", () => {
      context("getNamespaceKeyPrefix", () => {
        it("no match is found, because key does not start with xmlns", () => {
          expect(getNamespaceKeyPrefix("abc")).to.be.empty;
        });

        it("no match is found because symbol '*' goes after xmlns", () => {
          expect(getNamespaceKeyPrefix("xmlns*")).to.be.empty;
        });

        it("prefix is undefined, empty string returns", () => {
          expect(getNamespaceKeyPrefix("xmlns:")).to.be.empty;
        });
      });

      //TODO check with Shachar if this case can be received from xml
      context("isExistingNamespaceAttribute", () => {
        it("invalid attribute key", () => {
          const position = {
            startOffset: 1,
            startLine: 1,
            endColumn: 1,
            endLine: 1,
            endOffset: 1,
            startColumn: 1
          };
          const doc: XMLDocument = {
            position: position,
            rootElement: null,
            type: "XMLDocument"
          };
          const parent: XMLElement = {
            attributes: [],
            name: "x",
            namespaces: {},
            parent: doc,
            position: position,
            subElements: [],
            syntax: {},
            textContents: [],
            type: "XMLElement"
          };
          const attributeWithInvalidKey: XMLAttribute = {
            parent: parent,
            syntax: {},
            position: position,
            value: null,
            type: "XMLAttribute",
            key: null
          };
          expect(isExistingNamespaceAttribute(attributeWithInvalidKey)).to.be
            .false;
        });
      });
    });
  });
});

export function expectUI5Namespace(
  ui5Node:
    | UI5Class
    | UI5Aggregation
    | UI5Association
    | UI5Prop
    | UI5Event
    | UI5EnumValue
    | UI5Namespace
): asserts ui5Node is UI5Namespace {
  expect(ui5Node.kind).to.equal("UI5Namespace");
}
