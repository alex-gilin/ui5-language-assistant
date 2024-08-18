import { UI5SemanticModel } from "@ui5-language-assistant/semantic-model-types";
import {
  DEFAULT_UI5_FRAMEWORK,
  DEFAULT_UI5_VERSION,
} from "@ui5-language-assistant/constant";
import {
  generateModel,
  getFallbackPatchVersions,
} from "@ui5-language-assistant/test-utils";
import { generate } from "@ui5-language-assistant/semantic-model";
import {
  testValidationsScenario,
  computeExpectedRange,
  getDefaultContext,
} from "../../test-utils";
import { validators } from "../../../../src/api";
import { Context as AppContext } from "@ui5-language-assistant/context";

describe("the unknown namespace in xmlns attribute value validation", () => {
  let ui5SemanticModel: UI5SemanticModel;
  let appContext: AppContext;
  beforeAll(async () => {
    ui5SemanticModel = await generateModel({
      framework: DEFAULT_UI5_FRAMEWORK,
      version: (
        await getFallbackPatchVersions()
      ).SAPUI5 as typeof DEFAULT_UI5_VERSION,
      modelGenerator: generate,
    });
    appContext = getDefaultContext(ui5SemanticModel);
  });

  describe("true positive scenarios", () => {
    it("will detect an xmlns value that is not defined in the model in the default namespace", () => {
      const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns=🢂"sap.m.unknown"🢀>
          </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toStrictEqual([
            {
              issueType: "base",
              kind: "UnknownNamespaceInXmlnsAttributeValue",
              message: 'Unknown namespace: "sap.m.unknown"',
              offsetRange: computeExpectedRange(xmlSnippet),
              severity: "warn",
            },
          ]);
        },
      });
    });

    it("will detect an xmlns value that is not defined in the model in a non-default namespace", () => {
      const xmlSnippet = `
          <mvc:View
              xmlns:mvc="sap.ui.core.mvc"
              xmlns:m=🢂"sap.m.unknown"🢀>
          </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toStrictEqual([
            {
              issueType: "base",
              kind: "UnknownNamespaceInXmlnsAttributeValue",
              message: 'Unknown namespace: "sap.m.unknown"',
              offsetRange: computeExpectedRange(xmlSnippet),
              severity: "warn",
            },
          ]);
        },
      });
    });
  });

  describe("negative edge cases", () => {
    it("will not detect an issue when the namespace is valid and points to a namespace", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns="sap.m">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the namespace is valid and points to an enum", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns="sap.ui.core.BusyIndicatorSize">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the namespace is empty", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns="">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the namespace starts with http", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the namespace does not start with sap.*", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:custom="org.custom.namespace">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the namespace starts with sap but is not in a known library", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:custom="sap.unknown.namespace">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the attribute value is missing", () => {
      const xmlSnippet = `
      <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns:m >
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });

    it("will not detect an issue when the attribute value is a whitelisted namespace", () => {
      const xmlSnippet = `
      <mvc:View
        xmlns:mvc="sap.ui.core.mvc"
        xmlns:sap.ui.dt="sap.ui.dt">
      </mvc:View>`;

      testValidationsScenario({
        context: appContext,
        xmlText: xmlSnippet,
        validators: {
          attribute: [validators.validateUnknownXmlnsNamespace],
        },
        assertion: (issues) => {
          expect(issues).toBeEmpty();
        },
      });
    });
  });
});
