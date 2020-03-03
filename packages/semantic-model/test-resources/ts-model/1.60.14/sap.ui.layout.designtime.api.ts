import { LibraryFile } from "@vscode-ui5/semantic-model/src/apiJson";

const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.60.14",
  symbols: [
    {
      kind: "namespace",
      name: "sap.ui.layout",
      basename: "layout",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "",
      static: true,
      visibility: "public",
      description: "SAPUI5 library with layout controls."
    },
    {
      kind: "enum",
      name: "sap.ui.layout.BackgroundDesign",
      basename: "BackgroundDesign",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "BackgroundDesign",
      static: true,
      visibility: "public",
      since: "1.36.0",
      description: "Available Background Design.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Solid",
          visibility: "public",
          static: true,
          type: "string",
          description: "A solid background color dependent on the theme."
        },
        {
          name: "Translucent",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "A translucent background depending on the opacity value of the theme."
        },
        {
          name: "Transparent",
          visibility: "public",
          static: true,
          type: "string",
          description: "Transparent background."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.BlockBackgroundType",
      basename: "BlockBackgroundType",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "BlockBackgroundType",
      static: true,
      visibility: "public",
      description:
        "A string type that is used inside the BlockLayout to set predefined background color to the cells inside the control.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Accent",
          visibility: "public",
          static: true,
          type: "string",
          description: "Background with pre-defined accent colors"
        },
        {
          name: "Dashboard",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "For applications that want to make use of e.g. charts in the Blocks, this layout type has spacings around the Blocks"
        },
        {
          name: "Default",
          visibility: "public",
          static: true,
          type: "string",
          description: "Background is transparent"
        },
        {
          name: "Light",
          visibility: "public",
          static: true,
          type: "string",
          description: "Background is with predefined light colors"
        },
        {
          name: "Mixed",
          visibility: "public",
          static: true,
          type: "string",
          description: "Background with bright and dark background colors",
          deprecated: { since: "1.50" }
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.BlockLayout",
      basename: "BlockLayout",
      resource: "sap/ui/layout/BlockLayout.js",
      module: "sap/ui/layout/BlockLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The BlockLayout is used to display several objects in a section-based manner. <h3>Overview</h3> The BlockLayout uses horizontal and vertical subdivisions, and full-width banners to display a set of elements. By placing pictorial and textual elements side-by-side in different blocks, you can establish a visual connection between blocks and between similar elements. <h3>Structure</h3> The BlockLayout contains BlockLayout cells. Every cell consists of a title and content. The title can be text or a link.\n\nThe BlockLayout comes in five predefined types for background colors: <ul> <li>Layout only (default) - a layout scheme and no background colors</li> <li>Bright - a layout scheme with bright colors</li> <li>Accent - a layout scheme with four pre-defined color sets</li> <li>Dashboard - a layout scheme with additional borders and no background colors</li> <li>Mixed - a layout scheme with a mix of light and dark colors</li> </ul> Background colors are attached directly to the blocks of the layout.\n\nSpecial full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.\n\n<b>Note:</b> With version 1.48 colors can be set for each individual {@link sap.ui.layout.BlockLayoutCell cell}. There are 10 pre-defined color sets, each with 4 different shades. The main colors of the sets can be changed in Theme Designer. To change the background of a particular cell, set <code>backgroundColorSet</code> (main color) and <code>backgroundColorShade</code> (shade).\n\n<b>Note:</b> Usage of disabled, emphasized or subtle links as titles is not recommended. Dark background designs, for example Accent, are not fully supported with regards to Аccessibility when used with links as titles.\n\n<h3>Usage</h3> <h4>When to use</h4> <ul> <li>You want to create a catalogue-like page with sections of blocks.</li> <li>The BlockLayout is intended for developing administrative tools and applications.</li> </ul> <h4>When not to use</h4> <ul> <li>You want to display properties or features of one content item. Use a {@link sap.uxap.ObjectPageLayout object page} or {@link sap.f.DynamicPage dynamic page} instead.</li> </ul> <h3>Responsive Behavior</h3> <ul> <li>The breakpoints of the block layout react to the width of the control itself and not to the actual screen size.</li> <li> On small screens all blocks will wrap to a single scrollable column</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "background",
            type: "sap.ui.layout.BlockBackgroundType",
            defaultValue: "Default",
            group: "Appearance",
            visibility: "public",
            since: "1.42",
            description: "Determines the background used for the Layout",
            methods: ["getBackground", "setBackground"]
          },
          {
            name: "keepFontSize",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.52",
            description:
              "Keeps the font-size of the contents as is, independent from the screen size.",
            methods: ["getKeepFontSize", "setKeepFontSize"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.layout.BlockLayoutRow",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The Rows to be included in the content of the control",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/ui/layout/designtime/BlockLayout.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new BlockLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/block-layout/ Block Layout}"
        ]
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutRow",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.BlockLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getBackground",
          visibility: "public",
          since: "1.42",
          returnValue: {
            type: "sap.ui.layout.BlockBackgroundType",
            description: "Value of property <code>background</code>"
          },
          description:
            "Gets current value of property {@link #getBackground background}.\n\nDetermines the background used for the Layout\n\nDefault value is <code>Default</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.BlockLayoutRow[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe Rows to be included in the content of the control"
        },
        {
          name: "getKeepFontSize",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>keepFontSize</code>"
          },
          description:
            "Gets current value of property {@link #getKeepFontSize keepFontSize}.\n\nKeeps the font-size of the contents as is, independent from the screen size.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.BlockLayout."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutRow",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.layout.BlockLayoutRow</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutRow",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.layout.BlockLayoutRow",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setBackground",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayout",
            description: "BlockLayout instance. Allows method chaining"
          },
          parameters: [
            {
              name: "sNewBackground",
              type: "string",
              optional: false,
              description:
                "Background's style of type sap.ui.layout.BlockBackgroundType"
            }
          ],
          description: "Changes background type"
        },
        {
          name: "setKeepFontSize",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.ui.layout.BlockLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bKeepFontSize",
              type: "boolean",
              optional: false,
              description: "New value for property <code>keepFontSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getKeepFontSize keepFontSize}.\n\nKeeps the font-size of the contents as is, independent from the screen size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.BlockLayoutCell",
      basename: "BlockLayoutCell",
      resource: "sap/ui/layout/BlockLayoutCell.js",
      module: "sap/ui/layout/BlockLayoutCell",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls. The BlockLayoutCell should be used only as aggregation of the BlockLayoutRow.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines the title of the cell. <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "titleAlignment",
            type: "sap.ui.core.HorizontalAlign",
            defaultValue: "Begin",
            group: "Appearance",
            visibility: "public",
            description: "Defines the alignment of the cell title",
            methods: ["getTitleAlignment", "setTitleAlignment"]
          },
          {
            name: "titleLevel",
            type: "sap.ui.core.TitleLevel",
            defaultValue: "Auto",
            group: "Appearance",
            visibility: "public",
            description:
              "Defines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.",
            methods: ["getTitleLevel", "setTitleLevel"]
          },
          {
            name: "width",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "backgroundColorSet",
            type: "sap.ui.layout.BlockLayoutCellColorSet",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.48",
            description:
              "The Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.",
            methods: ["getBackgroundColorSet", "setBackgroundColorSet"]
          },
          {
            name: "backgroundColorShade",
            type: "sap.ui.layout.BlockLayoutCellColorShade",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.48",
            description:
              "The index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.",
            methods: ["getBackgroundColorShade", "setBackgroundColorShade"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The content to be included inside the cell",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "titleLink",
            singularName: "titleLink",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.56",
            description:
              "The link that will replace the title of the cell. <b>Note:</b> The only possible value is the <code>sap.m.Link</code> control.",
            methods: ["getTitleLink", "destroyTitleLink", "setTitleLink"]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/ui/layout/designtime/BlockLayoutCell.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new BlockLayoutCell.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyTitleLink",
          visibility: "public",
          since: "1.56",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleLink in the aggregation {@link #getTitleLink titleLink}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getBackgroundColorSet",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellColorSet",
            description: "Value of property <code>backgroundColorSet</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundColorSet backgroundColorSet}.\n\nThe Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade."
        },
        {
          name: "getBackgroundColorShade",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellColorShade",
            description: "Value of property <code>backgroundColorShade</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundColorShade backgroundColorShade}.\n\nThe index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content to be included inside the cell"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.BlockLayoutCell."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nDefines the title of the cell. <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>."
        },
        {
          name: "getTitleAlignment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.HorizontalAlign",
            description: "Value of property <code>titleAlignment</code>"
          },
          description:
            "Gets current value of property {@link #getTitleAlignment titleAlignment}.\n\nDefines the alignment of the cell title\n\nDefault value is <code>Begin</code>."
        },
        {
          name: "getTitleLevel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.TitleLevel",
            description: "Value of property <code>titleLevel</code>"
          },
          description:
            "Gets current value of property {@link #getTitleLevel titleLevel}.\n\nDefines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "getTitleLink",
          visibility: "public",
          since: "1.56",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getTitleLink titleLink}.\n\nThe link that will replace the title of the cell. <b>Note:</b> The only possible value is the <code>sap.m.Link</code> control."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nDefines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)\n\nDefault value is <code>0</code>."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setBackgroundColorSet",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundColorSet",
              type: "sap.ui.layout.BlockLayoutCellColorSet",
              optional: false,
              description:
                "New value for property <code>backgroundColorSet</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBackgroundColorSet backgroundColorSet}.\n\nThe Background color set from which the background color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorSet should be used only in combination with backgroundColorShade.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setBackgroundColorShade",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundColorShade",
              type: "sap.ui.layout.BlockLayoutCellColorShade",
              optional: false,
              description:
                "New value for property <code>backgroundColorShade</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBackgroundColorShade backgroundColorShade}.\n\nThe index of the background color in the color set from which the color will be selected. By using background colors from the predefined sets your colors could later be customized from the Theme Designer. <b>Note:</b> backgroundColorShade should be used only in combination with backgroundColorSet.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nDefines the title of the cell. <b>Note:</b> When the <code>titleLink</code> aggregation is provided, the title of the cell will be replaced with the text from the <code>titleLink</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTitleAlignment",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitleAlignment",
              type: "sap.ui.core.HorizontalAlign",
              optional: false,
              description: "New value for property <code>titleAlignment</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleAlignment titleAlignment}.\n\nDefines the alignment of the cell title\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Begin</code>."
        },
        {
          name: "setTitleLevel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitleLevel",
              type: "sap.ui.core.TitleLevel",
              optional: false,
              description: "New value for property <code>titleLevel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleLevel titleLevel}.\n\nDefines the aria level of the title This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "setTitleLink",
          visibility: "public",
          since: "1.56",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleLink",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleLink to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitleLink titleLink}."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nDefines the width of the cell. Depending on the context of the cell - whether it's in scrollable, or non scrollable row, this property is interpreted in two different ways. If the cell is placed inside a scrollable row - this property defines the width of the cell in percentages. If no value is provided - the default is 40%. If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell compared to the whole row. <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size, and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells, one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first cell will have a width of 25%, the second - 75%. According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.BlockLayoutCellColorSet",
      basename: "BlockLayoutCellColorSet",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "BlockLayoutCellColorSet",
      static: true,
      visibility: "public",
      since: "1.48",
      description:
        "A string type that is used inside the BlockLayoutCell to set a predefined set of colors for the cells.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "ColorSet1",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 1"
        },
        {
          name: "ColorSet10",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 10"
        },
        {
          name: "ColorSet11",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 11"
        },
        {
          name: "ColorSet2",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 2"
        },
        {
          name: "ColorSet3",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 3"
        },
        {
          name: "ColorSet4",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 4"
        },
        {
          name: "ColorSet5",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 5"
        },
        {
          name: "ColorSet6",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 6"
        },
        {
          name: "ColorSet7",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 7"
        },
        {
          name: "ColorSet8",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 8"
        },
        {
          name: "ColorSet9",
          visibility: "public",
          static: true,
          type: "string",
          description: "Color Set 9"
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.BlockLayoutCellColorShade",
      basename: "BlockLayoutCellColorShade",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "BlockLayoutCellColorShade",
      static: true,
      visibility: "public",
      since: "1.48",
      description:
        "A string type that is used inside the BlockLayoutCell to set a predefined set of color shades for the cells. The colors are defined with sap.ui.layout.BlockLayoutCellColorSet. And this is for the shades only.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "ShadeA",
          visibility: "public",
          static: true,
          type: "string",
          description: "Shade A"
        },
        {
          name: "ShadeB",
          visibility: "public",
          static: true,
          type: "string",
          description: "Shade B"
        },
        {
          name: "ShadeC",
          visibility: "public",
          static: true,
          type: "string",
          description: "Shade C"
        },
        {
          name: "ShadeD",
          visibility: "public",
          static: true,
          type: "string",
          description: "Shade D"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.BlockLayoutCellData",
      basename: "BlockLayoutCellData",
      resource: "sap/ui/layout/BlockLayoutCellData.js",
      module: "sap/ui/layout/BlockLayoutCellData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.50.0",
      extends: "sap.ui.core.LayoutData",
      description: "Holds layout data for the BlockLayoutCells contents.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "sSize",
            type: "int",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Sets the width of the cell for S size of the BlockLayout.",
            methods: ["getSSize", "setSSize"]
          },
          {
            name: "mSize",
            type: "int",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Sets the width of the cell for M size of the BlockLayout.",
            methods: ["getMSize", "setMSize"]
          },
          {
            name: "lSize",
            type: "int",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Sets the width of the cell for L size of the BlockLayout.",
            methods: ["getLSize", "setLSize"]
          },
          {
            name: "xlSize",
            type: "int",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Sets the width of the cell for XL size of the BlockLayout.",
            methods: ["getXlSize", "setXlSize"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new BlockLayoutCellData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.BlockLayoutCellData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getLSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>lSize</code>"
          },
          description:
            "Gets current value of property {@link #getLSize lSize}.\n\nSets the width of the cell for L size of the BlockLayout.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.BlockLayoutCellData."
        },
        {
          name: "getMSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>mSize</code>"
          },
          description:
            "Gets current value of property {@link #getMSize mSize}.\n\nSets the width of the cell for M size of the BlockLayout.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getSSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>sSize</code>"
          },
          description:
            "Gets current value of property {@link #getSSize sSize}.\n\nSets the width of the cell for S size of the BlockLayout.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getXlSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>xlSize</code>"
          },
          description:
            "Gets current value of property {@link #getXlSize xlSize}.\n\nSets the width of the cell for XL size of the BlockLayout.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setLSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLSize",
              type: "int",
              optional: false,
              description: "New value for property <code>lSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLSize lSize}.\n\nSets the width of the cell for L size of the BlockLayout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setMSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMSize",
              type: "int",
              optional: false,
              description: "New value for property <code>mSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMSize mSize}.\n\nSets the width of the cell for M size of the BlockLayout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setSize",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.BlockLayoutCellData" },
          parameters: [{ name: "iValue", type: "undefined", optional: false }],
          description:
            "Sets width of the cell to all sizes if the width is specified."
        },
        {
          name: "setSSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSSize",
              type: "int",
              optional: false,
              description: "New value for property <code>sSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSSize sSize}.\n\nSets the width of the cell for S size of the BlockLayout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setXlSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCellData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iXlSize",
              type: "int",
              optional: false,
              description: "New value for property <code>xlSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getXlSize xlSize}.\n\nSets the width of the cell for XL size of the BlockLayout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.BlockLayoutRow",
      basename: "BlockLayoutRow",
      resource: "sap/ui/layout/BlockLayoutRow.js",
      module: "sap/ui/layout/BlockLayoutRow",
      export: "",
      static: true,
      visibility: "public",
      since: "1.34",
      extends: "sap.ui.core.Control",
      description:
        "The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout cells. The BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "scrollable",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.",
            methods: ["getScrollable", "setScrollable"]
          },
          {
            name: "rowColorSet",
            type: "sap.ui.layout.BlockRowColorSets",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.42",
            description:
              "Defines background type for that row. There might be several rows with the same type",
            methods: ["getRowColorSet", "setRowColorSet"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.layout.BlockLayoutCell",
            cardinality: "0..n",
            visibility: "public",
            description: "The content cells to be included in the row.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "accentCells",
            singularName: "accentCell",
            type: "sap.ui.layout.BlockLayoutCell",
            cardinality: "0..n",
            visibility: "public",
            since: "1.42",
            description:
              'Cells that would be accented. *Note:* This association has visual impact only for BlockLayouts with background types "Mixed" and "Accent".\n\nMixed: In this type, areas of 25% (on desktop) can have a dark background color. Per section one area can be dark. Accent: Every section can contain multiple gray blocks, which are used alternately, beginning with the bright one',
            methods: [
              "getAccentCells",
              "addAccentCell",
              "removeAccentCell",
              "removeAllAccentCells"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/BlockLayoutRow.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new BlockLayoutRow.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAccentCell",
          visibility: "public",
          since: "1.42",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAccentCell",
              type: "sap.ui.core.ID|sap.ui.layout.BlockLayoutCell",
              optional: false,
              description:
                "The accentCells to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some accentCell into the association {@link #getAccentCells accentCells}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutCell",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAccentCells",
          visibility: "public",
          since: "1.42",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAccentCells accentCells}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.BlockLayoutCell[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content cells to be included in the row."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.BlockLayoutRow."
        },
        {
          name: "getRowColorSet",
          visibility: "public",
          since: "1.42",
          returnValue: {
            type: "sap.ui.layout.BlockRowColorSets",
            description: "Value of property <code>rowColorSet</code>"
          },
          description:
            "Gets current value of property {@link #getRowColorSet rowColorSet}.\n\nDefines background type for that row. There might be several rows with the same type"
        },
        {
          name: "getScrollable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>scrollable</code>"
          },
          description:
            "Gets current value of property {@link #getScrollable scrollable}.\n\nSets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.\n\nDefault value is <code>false</code>."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutCell",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.layout.BlockLayoutCell</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.layout.BlockLayoutCell",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAccentCell",
          visibility: "public",
          since: "1.42",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed accentCell or <code>null</code>"
          },
          parameters: [
            {
              name: "vAccentCell",
              type: "int|sap.ui.core.ID|sap.ui.layout.BlockLayoutCell",
              optional: false,
              description: "The accentCell to be removed or its index or ID"
            }
          ],
          description:
            "Removes an accentCell from the association named {@link #getAccentCells accentCells}."
        },
        {
          name: "removeAllAccentCells",
          visibility: "public",
          since: "1.42",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAccentCells accentCells}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutCell",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.layout.BlockLayoutCell",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setRowColorSet",
          visibility: "public",
          since: "1.42",
          returnValue: { type: "sap.ui.layout.BlockLayoutRow" },
          parameters: [
            {
              name: "sType",
              type: "sap.ui.layout.BlockRowColorSets",
              optional: false
            }
          ],
          description:
            "Changes dynamically row color set Note: this might invalidate cells inside and also change color sets of the other BlockLayoutRow-s below it."
        },
        {
          name: "setScrollable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.BlockLayoutRow",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bScrollable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>scrollable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getScrollable scrollable}.\n\nSets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get aligned side by side, with horizontal scroll bar for the row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.BlockRowColorSets",
      basename: "BlockRowColorSets",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "BlockRowColorSets",
      static: true,
      visibility: "public",
      description:
        "A string type that is used inside the BlockLayoutRow to set predefined set of colors the cells inside the control. Color sets depend on sap.ui.layout.BlockBackgroundType",
      "ui5-metamodel": true,
      properties: [
        {
          name: "ColorSet1",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 1 sap.ui.layout.BlockBackgroundType.Dashboard: N/A"
        },
        {
          name: "ColorSet2",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 2 sap.ui.layout.BlockBackgroundType.Dashboard: N/A"
        },
        {
          name: "ColorSet3",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 1 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 1 sap.ui.layout.BlockBackgroundType.Accent: Color Set 3 sap.ui.layout.BlockBackgroundType.Dashboard: N/A"
        },
        {
          name: "ColorSet4",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "sap.ui.layout.BlockBackgroundType.Default: N/A sap.ui.layout.BlockBackgroundType.Light: Color Set 2 sap.ui.layout.BlockBackgroundType.Mixed: Color Set 2 sap.ui.layout.BlockBackgroundType.Accent: Color Set 4 sap.ui.layout.BlockBackgroundType.Dashboard: N/A"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.CSSGrid",
      basename: "CSSGrid",
      resource: "sap/ui/layout/cssgrid/CSSGrid.js",
      module: "sap/ui/layout/cssgrid/CSSGrid",
      export: "",
      static: true,
      visibility: "public",
      since: "1.60",
      extends: "sap.ui.core.Control",
      implements: [
        "{sap.ui.layout.cssgrid.IGridConfigurable}",
        "sap.ui.layout.cssgrid.IGridConfigurable"
      ],
      description:
        'A layout control, used to create full page layouts or user interface elements.\n\n<h3>Overview</h3>\n\nA two-dimensional layout control based on the native-browser CSS display grid which can handle both columns and rows. The control can be used along with {@link sap.m.FlexBox} which is the one-dimensional alternative for layouting.\n\nWith properties it is possible to define: <ul> <li>columns, rows and their sizes in the grid</li> <li>vertical and horizontal gaps between the grid items</li> <li>the flow algorithm when new items are added in the grid</li> </ul>\n\nThe dimensions of the grid items are defined on a <code>CSSGrid</code> level. Every item can override its size by specifying how many columns and/or rows it will take in the <code>CSSGrid</code>. Every item can override its position by specifying from which column and/or row it will start. The configuration of a single item is done with {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.\n\n<h3>Terminology</h3> <ul> <li>Grid - The container which has all grid settings</li> <li>Gutters - The gap between the rows and columns</li> <li>Grid areas - Items that take more than one row and/or column</li> <li>Grid cells - The items of the Grid</li> <li>Grid lines - The lines around and between the rows and columns</li> <li>Grid tracks - The space between any two lines in the grid</li> <li>"fr" Unit - A special grid unit (short from "fraction") which represents a fraction of the available space in the grid</li> <li>Implicit and Explicit grid - Explicit grid consists of rows and columns defined with <code>gridTemplateColumns</code> and <code>gridTemplateRows</code>. The grid also creates rows and columns on its own when needed. Their dimensions are defined with <code>gridAutoColumns</code> and <code>gridAutoRows</code>.</li> </ul>\n\n<h3>Structure</h3> The <code>CSSGrid</code> has the following elements: <ul> <li><code>items</code> - The items of the <code>CSSGrid</code></li> <li><code>customLayout</code> - An aggregation used to pass the <code>CSSGrid</code> configuration. Used for templating.</li> </ul>\n\n<h3>Usage</h3>\n\nFor general cases, use the <code>CSSGrid</code> properties to configure how the layout should look. For Box case (equal sized items), use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout} For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}\n\n<i>When to use</i> <ul> <li>If a two-dimensional layout configuration is needed (both columns and rows are defined)</li> </ul>\n\n<i>When not to use</i> <ul> <li>If the layout needs to be defined only by one dimension (either column or row, not both). Use {@link sap.m.FlexBox FlexBox} instead.</li> </ul>\n\n<h3>Responsive behavior</h3> <ul> <li>Fully configurable by the developer. It is possible to create a "breathing" columns layout which means columns width will grow/shrink depending on grid size.</li> <li>It is possible to pass a {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} to the <code>customLayout</code> aggregation of the <code>CSSGrid</code> and configure how it will look in different breakpoints (S, M, L, XL).</li> </ul>\n\n<h3>Current Limitations</h3> <ul> <li>No support for IE11.</li> <li>No support for Edge version 15.</li> <li>No alignment and ordering</li> <li>No Named grid areas and lines</li> </ul>',
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Misc",
            visibility: "public",
            description: "The width of the control",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "gridTemplateColumns",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridTemplateColumns", "setGridTemplateColumns"]
          },
          {
            name: "gridTemplateRows",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridTemplateRows", "setGridTemplateRows"]
          },
          {
            name: "gridRowGap",
            type: "sap.ui.core.CSSSize",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridRowGap", "setGridRowGap"]
          },
          {
            name: "gridColumnGap",
            type: "sap.ui.core.CSSSize",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridColumnGap", "setGridColumnGap"]
          },
          {
            name: "gridGap",
            type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridGap", "setGridGap"]
          },
          {
            name: "gridAutoRows",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoRows", "setGridAutoRows"]
          },
          {
            name: "gridAutoColumns",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoColumns", "setGridAutoColumns"]
          },
          {
            name: "gridAutoFlow",
            type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
            defaultValue: "Row",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoFlow", "setGridAutoFlow"]
          }
        ],
        aggregations: [
          {
            name: "customLayout",
            singularName: "customLayout",
            type: "sap.ui.layout.cssgrid.GridLayoutBase",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Defines a custom Grid layout for the control. If provided, it will override all of the grid properties.",
            methods: [
              "getCustomLayout",
              "destroyCustomLayout",
              "setCustomLayout"
            ]
          },
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The items contained by the control.",
            methods: [
              "getItems",
              "destroyItems",
              "insertItem",
              "addItem",
              "removeItem",
              "indexOfItem",
              "removeAllItems"
            ]
          }
        ],
        defaultAggregation: "items"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new CSSGrid.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}",
          "{@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}"
        ]
      },
      methods: [
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "destroyCustomLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.cssgrid.CSSGrid with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getCustomLayout",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridLayoutBase" },
          description:
            "Gets content of aggregation {@link #getCustomLayout customLayout}.\n\nDefines a custom Grid layout for the control. If provided, it will override all of the grid properties."
        },
        {
          name: "getGridAutoColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridAutoColumns</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridAutoFlow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
            description: "Value of property <code>gridAutoFlow</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>Row</code>."
        },
        {
          name: "getGridAutoRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridAutoRows</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoRows gridAutoRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridColumnGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>gridColumnGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridColumnGap gridColumnGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridDomRefs",
          visibility: "protected",
          returnValue: {
            type: "HTMLElement[]",
            description: "An array with the DOM elements"
          },
          description: "Implements IGridConfigurable interface"
        },
        {
          name: "getGridGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
            description: "Value of property <code>gridGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridGap gridGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridLayoutConfiguration",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridLayoutBase",
            description: "The grid layout"
          },
          description: "Implements IGridConfigurable interface"
        },
        {
          name: "getGridRowGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>gridRowGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridRowGap gridRowGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridTemplateColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridTemplateColumns</code>"
          },
          description:
            "Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridTemplateRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridTemplateRows</code>"
          },
          description:
            "Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nThe items contained by the control."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.cssgrid.CSSGrid."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nThe width of the control\n\nDefault value is <code>100%</code>."
        },
        {
          name: "indexOfItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The item to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position"
            }
          ],
          description:
            "Inserts a item into the aggregation {@link #getItems items}."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setCustomLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCustomLayout",
              type: "sap.ui.layout.cssgrid.GridLayoutBase",
              optional: false,
              description: "The customLayout to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getCustomLayout customLayout}."
        },
        {
          name: "setGridAutoColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoColumns",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description: "New value for property <code>gridAutoColumns</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridAutoFlow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoFlow",
              type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
              optional: false,
              description: "New value for property <code>gridAutoFlow</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Row</code>."
        },
        {
          name: "setGridAutoRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoRows",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description: "New value for property <code>gridAutoRows</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoRows gridAutoRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridColumnGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridColumnGap",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>gridColumnGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridColumnGap gridColumnGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridGap",
              type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
              optional: false,
              description: "New value for property <code>gridGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridGap gridGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridRowGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridRowGap",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>gridRowGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridRowGap gridRowGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridTemplateColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridTemplateColumns",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description:
                "New value for property <code>gridTemplateColumns</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridTemplateRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridTemplateRows",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description:
                "New value for property <code>gridTemplateRows</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGrid",
            description:
              "Pointer to the control instance to allow method chaining."
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "The width of the Grid as CSS size."
            }
          ],
          description: "Sets the width of the grid."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
      basename: "CSSGridAutoFlow",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "cssgrid.CSSGridAutoFlow",
      static: true,
      visibility: "public",
      since: "1.60.0",
      description:
        "A string type that is used for CSS grid to control how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
      references: [
        "{@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow}"
      ],
      "ui5-metamodel": true,
      properties: [
        {
          name: "Column",
          visibility: "public",
          static: true,
          type: "string",
          description: "Insert auto-placed items by filling each column."
        },
        {
          name: "ColumnDense",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Insert auto-placed items by filling each column, and fill any holes in the grid."
        },
        {
          name: "Row",
          visibility: "public",
          static: true,
          type: "string",
          description: "Insert auto-placed items by filling each row."
        },
        {
          name: "RowDense",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Insert auto-placed items by filling each row, and fill any holes in the grid."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.GridItemLayoutData",
      basename: "GridItemLayoutData",
      resource: "sap/ui/layout/cssgrid/GridItemLayoutData.js",
      module: "sap/ui/layout/cssgrid/GridItemLayoutData",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.LayoutData",
      description: "Holds layout data for a grid item.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "gridColumnStart",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-column-start",
            methods: ["getGridColumnStart", "setGridColumnStart"]
          },
          {
            name: "gridColumnEnd",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-column-end",
            methods: ["getGridColumnEnd", "setGridColumnEnd"]
          },
          {
            name: "gridRowStart",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-row-start",
            methods: ["getGridRowStart", "setGridRowStart"]
          },
          {
            name: "gridRowEnd",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-row-end",
            methods: ["getGridRowEnd", "setGridRowEnd"]
          },
          {
            name: "gridColumn",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-column",
            methods: ["getGridColumn", "setGridColumn"]
          },
          {
            name: "gridRow",
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid item property grid-row",
            methods: ["getGridRow", "setGridRow"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new element, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new element."
          }
        ],
        description:
          "Constructor for a new <code>sap.ui.layout.cssgrid.GridItemLayoutData</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.cssgrid.GridItemLayoutData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getGridColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridColumn</code>"
          },
          description:
            "Gets current value of property {@link #getGridColumn gridColumn}.\n\nSets the value for the CSS display:grid item property grid-column\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridColumnEnd",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridColumnEnd</code>"
          },
          description:
            "Gets current value of property {@link #getGridColumnEnd gridColumnEnd}.\n\nSets the value for the CSS display:grid item property grid-column-end\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridColumnStart",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridColumnStart</code>"
          },
          description:
            "Gets current value of property {@link #getGridColumnStart gridColumnStart}.\n\nSets the value for the CSS display:grid item property grid-column-start\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridRow</code>"
          },
          description:
            "Gets current value of property {@link #getGridRow gridRow}.\n\nSets the value for the CSS display:grid item property grid-row\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridRowEnd",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridRowEnd</code>"
          },
          description:
            "Gets current value of property {@link #getGridRowEnd gridRowEnd}.\n\nSets the value for the CSS display:grid item property grid-row-end\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridRowStart",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridLine",
            description: "Value of property <code>gridRowStart</code>"
          },
          description:
            "Gets current value of property {@link #getGridRowStart gridRowStart}.\n\nSets the value for the CSS display:grid item property grid-row-start\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.cssgrid.GridItemLayoutData."
        },
        {
          name: "setGridColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridColumn",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridColumn</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridColumn gridColumn}.\n\nSets the value for the CSS display:grid item property grid-column\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridColumnEnd",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridColumnEnd",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridColumnEnd</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridColumnEnd gridColumnEnd}.\n\nSets the value for the CSS display:grid item property grid-column-end\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridColumnStart",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridColumnStart",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridColumnStart</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridColumnStart gridColumnStart}.\n\nSets the value for the CSS display:grid item property grid-column-start\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridRow",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridRow</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridRow gridRow}.\n\nSets the value for the CSS display:grid item property grid-row\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridRowEnd",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridRowEnd",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridRowEnd</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridRowEnd gridRowEnd}.\n\nSets the value for the CSS display:grid item property grid-row-end\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridRowStart",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridItemLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridRowStart",
              type: "sap.ui.layout.cssgrid.CSSGridLine",
              optional: false,
              description: "New value for property <code>gridRowStart</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridRowStart gridRowStart}.\n\nSets the value for the CSS display:grid item property grid-row-start\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.GridLayoutBase",
      basename: "GridLayoutBase",
      resource: "sap/ui/layout/cssgrid/GridLayoutBase.js",
      module: "sap/ui/layout/cssgrid/GridLayoutBase",
      export: "",
      abstract: true,
      static: true,
      visibility: "public",
      since: "1.60",
      extends: "sap.ui.base.ManagedObject",
      description:
        "Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "object" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Accepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.\n\nThis class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject} can be used."
      },
      methods: [
        {
          name: "_applySingleGridLayout",
          visibility: "protected",
          parameters: [
            {
              name: "oElement",
              type: "sap.ui.core.Control|HTMLElement",
              optional: false,
              description:
                "The element or control on which to apply the display:grid styles"
            }
          ],
          description:
            "Apply display:grid styles to the provided HTML element or control based on the currently active GridSettings"
        },
        {
          name: "_removeGridLayout",
          visibility: "protected",
          parameters: [
            {
              name: "oElement",
              type: "sap.ui.core.Control|HTMLElement",
              optional: false,
              description:
                "The element or control from which to remove the grid styles"
            }
          ],
          description:
            "Removes all display:grid styles from the provided HTML element or control"
        },
        {
          name: "applyGridLayout",
          visibility: "public",
          parameters: [
            {
              name: "aElements",
              type: "sap.ui.core.Control[]|HTMLElement[]",
              optional: false,
              description:
                "The elements or controls on which to apply the display:grid styles"
            }
          ],
          description:
            "Apply display:grid styles to the provided array of HTML elements or controls based on the currently active GridSettings"
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.cssgrid.GridLayoutBase with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}."
        },
        {
          name: "getActiveGridSettings",
          visibility: "public",
          description:
            "Should return sap.ui.layout.cssgrid.GridSettings - The active GridSettings Must be implemented by child classes"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.cssgrid.GridLayoutBase."
        },
        {
          name: "isResponsive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "If the Grid Layout is responsive."
          }
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.GridLayoutDelegate",
      basename: "GridLayoutDelegate",
      resource: "sap/ui/layout/cssgrid/GridLayoutDelegate.js",
      module: "sap/ui/layout/cssgrid/GridLayoutDelegate",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.base.Object",
      description:
        "Add handlers for a sap.ui.layout.cssgrid.IGridConfigurable control lifecycle events. Applies the grid layout when necessary. Calls sap.ui.layout.cssgrid.GridLayoutBase hook functions.",
      "ui5-metadata": { stereotype: "object" },
      constructor: { visibility: "public" }
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.GridResponsiveLayout",
      basename: "GridResponsiveLayout",
      resource: "sap/ui/layout/cssgrid/GridResponsiveLayout.js",
      module: "sap/ui/layout/cssgrid/GridResponsiveLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.60",
      extends: "sap.ui.layout.cssgrid.GridLayoutBase",
      description:
        "Applies a sap.ui.layout.cssgrid.GridSettings to a provided DOM element or Control. Have to possibility to hold multiple sap.ui.layout.cssgrid.GridSettings and apply the currently active GridSettings.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "object",
        aggregations: [
          {
            name: "layout",
            singularName: "layout",
            type: "sap.ui.layout.cssgrid.GridSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size",
            methods: ["getLayout", "destroyLayout", "setLayout"]
          },
          {
            name: "layoutS",
            singularName: "layout",
            type: "sap.ui.layout.cssgrid.GridSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              'The sap.ui.layout.cssgrid.GridSettings applied for size "S"',
            methods: ["getLayoutS", "destroyLayoutS", "setLayoutS"]
          },
          {
            name: "layoutM",
            singularName: "layoutM",
            type: "sap.ui.layout.cssgrid.GridSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              'The sap.ui.layout.cssgrid.GridSettings applied for size "M"',
            methods: ["getLayoutM", "destroyLayoutM", "setLayoutM"]
          },
          {
            name: "layoutL",
            singularName: "layoutL",
            type: "sap.ui.layout.cssgrid.GridSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              'The sap.ui.layout.cssgrid.GridSettings applied for size "L"',
            methods: ["getLayoutL", "destroyLayoutL", "setLayoutL"]
          },
          {
            name: "layoutXL",
            singularName: "layoutXL",
            type: "sap.ui.layout.cssgrid.GridSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              'The sap.ui.layout.cssgrid.GridSettings applied for size "XL"',
            methods: ["getLayoutXL", "destroyLayoutXL", "setLayoutXL"]
          }
        ],
        events: [
          {
            name: "layoutChange",
            visibility: "public",
            description: "Fired when the currently active GridSettings changes",
            parameters: {
              layout: {
                name: "layout",
                type: "string",
                description: "The name of the newly active layout aggregation"
              }
            },
            methods: [
              "attachLayoutChange",
              "detachLayoutChange",
              "fireLayoutChange"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new GridResponsiveLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "layoutChange",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    layout: {
                      name: "layout",
                      type: "string",
                      optional: false,
                      description:
                        "The name of the newly active layout aggregation"
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when the currently active GridSettings changes"
        }
      ],
      methods: [
        {
          name: "attachLayoutChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:layoutChange layoutChange} event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code> itself.\n\nFired when the currently active GridSettings changes"
        },
        {
          name: "destroyLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layout in the aggregation {@link #getLayout layout}."
        },
        {
          name: "destroyLayoutL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layoutL in the aggregation {@link #getLayoutL layoutL}."
        },
        {
          name: "destroyLayoutM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layoutM in the aggregation {@link #getLayoutM layoutM}."
        },
        {
          name: "destroyLayoutS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layoutS in the aggregation {@link #getLayoutS layoutS}."
        },
        {
          name: "destroyLayoutXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layoutXL in the aggregation {@link #getLayoutXL layoutXL}."
        },
        {
          name: "detachLayoutChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:layoutChange layoutChange} event of this <code>sap.ui.layout.cssgrid.GridResponsiveLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.cssgrid.GridResponsiveLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.cssgrid.GridLayoutBase.extend}."
        },
        {
          name: "fireLayoutChange",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                layout: {
                  name: "layout",
                  type: "string",
                  optional: true,
                  description: "The name of the newly active layout aggregation"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:layoutChange layoutChange} to attached listeners."
        },
        {
          name: "getLayout",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridSettings" },
          description:
            "Gets content of aggregation {@link #getLayout layout}.\n\nThe sap.ui.layout.cssgrid.GridSettings applied if no settings are provided for a specific size"
        },
        {
          name: "getLayoutL",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridSettings" },
          description:
            'Gets content of aggregation {@link #getLayoutL layoutL}.\n\nThe sap.ui.layout.cssgrid.GridSettings applied for size "L"'
        },
        {
          name: "getLayoutM",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridSettings" },
          description:
            'Gets content of aggregation {@link #getLayoutM layoutM}.\n\nThe sap.ui.layout.cssgrid.GridSettings applied for size "M"'
        },
        {
          name: "getLayoutS",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridSettings" },
          description:
            'Gets content of aggregation {@link #getLayoutS layoutS}.\n\nThe sap.ui.layout.cssgrid.GridSettings applied for size "S"'
        },
        {
          name: "getLayoutXL",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridSettings" },
          description:
            'Gets content of aggregation {@link #getLayoutXL layoutXL}.\n\nThe sap.ui.layout.cssgrid.GridSettings applied for size "XL"'
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.cssgrid.GridResponsiveLayout."
        },
        {
          name: "setLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayout",
              type: "sap.ui.layout.cssgrid.GridSettings",
              optional: false,
              description: "The layout to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayout layout}."
        },
        {
          name: "setLayoutL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayoutL",
              type: "sap.ui.layout.cssgrid.GridSettings",
              optional: false,
              description: "The layoutL to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayoutL layoutL}."
        },
        {
          name: "setLayoutM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayoutM",
              type: "sap.ui.layout.cssgrid.GridSettings",
              optional: false,
              description: "The layoutM to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayoutM layoutM}."
        },
        {
          name: "setLayoutS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayoutS",
              type: "sap.ui.layout.cssgrid.GridSettings",
              optional: false,
              description: "The layoutS to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayoutS layoutS}."
        },
        {
          name: "setLayoutXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridResponsiveLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayoutXL",
              type: "sap.ui.layout.cssgrid.GridSettings",
              optional: false,
              description: "The layoutXL to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayoutXL layoutXL}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.cssgrid.GridSettings",
      basename: "GridSettings",
      resource: "sap/ui/layout/cssgrid/GridSettings.js",
      module: "sap/ui/layout/cssgrid/GridSettings",
      export: "",
      static: true,
      visibility: "public",
      since: "1.60",
      extends: "sap.ui.base.ManagedObject",
      description: "Holds a set of CSS display:grid properties",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "object",
        properties: [
          {
            name: "gridTemplateColumns",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridTemplateColumns", "setGridTemplateColumns"]
          },
          {
            name: "gridTemplateRows",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridTemplateRows", "setGridTemplateRows"]
          },
          {
            name: "gridRowGap",
            type: "sap.ui.core.CSSSize",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridRowGap", "setGridRowGap"]
          },
          {
            name: "gridColumnGap",
            type: "sap.ui.core.CSSSize",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridColumnGap", "setGridColumnGap"]
          },
          {
            name: "gridGap",
            type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridGap", "setGridGap"]
          },
          {
            name: "gridAutoRows",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoRows", "setGridAutoRows"]
          },
          {
            name: "gridAutoColumns",
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoColumns", "setGridAutoColumns"]
          },
          {
            name: "gridAutoFlow",
            type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
            defaultValue: "Row",
            group: "Misc",
            visibility: "public",
            description:
              "Sets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.",
            methods: ["getGridAutoFlow", "setGridAutoFlow"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new GridSettings.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.cssgrid.GridSettings with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}."
        },
        {
          name: "getGridAutoColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridAutoColumns</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoColumns gridAutoColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridAutoFlow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
            description: "Value of property <code>gridAutoFlow</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoFlow gridAutoFlow}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>Row</code>."
        },
        {
          name: "getGridAutoRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridAutoRows</code>"
          },
          description:
            "Gets current value of property {@link #getGridAutoRows gridAutoRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridColumnGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>gridColumnGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridColumnGap gridColumnGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
            description: "Value of property <code>gridGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridGap gridGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridRowGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>gridRowGap</code>"
          },
          description:
            "Gets current value of property {@link #getGridRowGap gridRowGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridTemplateColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridTemplateColumns</code>"
          },
          description:
            "Gets current value of property {@link #getGridTemplateColumns gridTemplateColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getGridTemplateRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.CSSGridTrack",
            description: "Value of property <code>gridTemplateRows</code>"
          },
          description:
            "Gets current value of property {@link #getGridTemplateRows gridTemplateRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.cssgrid.GridSettings."
        },
        {
          name: "setGridAutoColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoColumns",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description: "New value for property <code>gridAutoColumns</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoColumns gridAutoColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns MDN web docs: grid-auto-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridAutoFlow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoFlow",
              type: "sap.ui.layout.cssgrid.CSSGridAutoFlow",
              optional: false,
              description: "New value for property <code>gridAutoFlow</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoFlow gridAutoFlow}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow MDN web docs: grid-auto-flow}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Row</code>."
        },
        {
          name: "setGridAutoRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridAutoRows",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description: "New value for property <code>gridAutoRows</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridAutoRows gridAutoRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows MDN web docs: grid-auto-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridColumnGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridColumnGap",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>gridColumnGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridColumnGap gridColumnGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap MDN web docs: grid-column-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridGap",
              type: "sap.ui.layout.cssgrid.CSSGridGapShortHand",
              optional: false,
              description: "New value for property <code>gridGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridGap gridGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap MDN web docs: grid-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridRowGap",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridRowGap",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>gridRowGap</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridRowGap gridRowGap}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap MDN web docs: grid-row-gap}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridTemplateColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridTemplateColumns",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description:
                "New value for property <code>gridTemplateColumns</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridTemplateColumns gridTemplateColumns}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns MDN web docs: grid-template-columns}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setGridTemplateRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGridTemplateRows",
              type: "sap.ui.layout.cssgrid.CSSGridTrack",
              optional: false,
              description:
                "New value for property <code>gridTemplateRows</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGridTemplateRows gridTemplateRows}.\n\nSets the value for the CSS display:grid property {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows MDN web docs: grid-template-rows}\n\n<b>Note:</b> Not supported in IE11, Edge 15.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        }
      ]
    },
    {
      kind: "interface",
      name: "sap.ui.layout.cssgrid.IGridConfigurable",
      basename: "IGridConfigurable",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "cssgrid.IGridConfigurable",
      static: true,
      visibility: "public",
      since: "1.60.0",
      description:
        "Defines the functions that need to be implemented by a Control which wants to have display:grid behavior via sap.ui.layout.cssgrid.GridLayoutDelegate",
      methods: [
        {
          name: "getGridDomRefs",
          visibility: "public",
          static: true,
          since: "1.60.0",
          returnValue: {
            type: "sap.ui.core.Control[]|HTMLElement[]",
            description:
              "The controls or HTML elements on which display:grid styles should be applied"
          },
          description:
            "The function is used by GridLayoutDelegate to determine on which HTML Elements the display:grid styles should be applied"
        },
        {
          name: "getGridLayoutConfiguration",
          visibility: "public",
          static: true,
          since: "1.60.0",
          returnValue: {
            type: "sap.ui.layout.cssgrid.GridLayoutBase",
            description: "The display:grid layout to apply"
          },
          description:
            "The function is used by GridLayoutDelegate to get the grid layout (display:grid styles) to apply"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.DynamicSideContent",
      basename: "DynamicSideContent",
      resource: "sap/ui/layout/DynamicSideContent.js",
      module: "sap/ui/layout/DynamicSideContent",
      export: "",
      static: true,
      visibility: "public",
      since: "1.30",
      extends: "sap.ui.core.Control",
      description:
        "Layout control that allows additional (side) content to be displayed dynamically.\n\n<h3>Overview</h3>\n\n<code>DynamicSideContent</code> is a layout control that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.\n\n<h3>Usage</h3>\n\n<i>When to use?</i>\n\nUse this control if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.\n\n<i>When not to use?</i>\n\nDon't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.\n\n<h3>Responsive Behavior</h3>\n\nScreen width > 1440 px\n\n<ul><li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).</li> <li>If the application defines a trigger, the side content can be hidden.</li></ul>\n\nScreen width <= 1440 px and > 720px\n\n<ul><li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.</li></ul>\n\nScreen width <= 720 px (for example on a mobile device)\n\n<ul><li>In this case, the side content automatically disappears from the screen (unless specified to stay under the content) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.</li></ul>\n\nA special case, allows for comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showSideContent",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the side content is visible or hidden.",
            methods: ["getShowSideContent", "setShowSideContent"]
          },
          {
            name: "showMainContent",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the main content is visible or hidden.",
            methods: ["getShowMainContent", "setShowMainContent"]
          },
          {
            name: "sideContentVisibility",
            type: "sap.ui.layout.SideContentVisibility",
            defaultValue: "ShowAboveS",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines on which breakpoints the side content is visible.",
            methods: ["getSideContentVisibility", "setSideContentVisibility"]
          },
          {
            name: "sideContentFallDown",
            type: "sap.ui.layout.SideContentFallDown",
            defaultValue: "OnMinimumWidth",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines on which breakpoints the side content falls down below the main content.",
            methods: ["getSideContentFallDown", "setSideContentFallDown"]
          },
          {
            name: "equalSplit",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines whether the control is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.",
            methods: ["getEqualSplit", "setEqualSplit"]
          },
          {
            name: "containerQuery",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.",
            methods: ["getContainerQuery", "setContainerQuery"]
          },
          {
            name: "sideContentPosition",
            type: "sap.ui.layout.SideContentPosition",
            defaultValue: "End",
            group: "Appearance",
            visibility: "public",
            since: "1.36",
            description:
              "Determines whether the side content is on the left or on the right side of the main content.",
            methods: ["getSideContentPosition", "setSideContentPosition"]
          }
        ],
        aggregations: [
          {
            name: "mainContent",
            singularName: "mainContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Main content controls.",
            methods: [
              "getMainContent",
              "destroyMainContent",
              "insertMainContent",
              "addMainContent",
              "removeMainContent",
              "indexOfMainContent",
              "removeAllMainContent"
            ]
          },
          {
            name: "sideContent",
            singularName: "sideContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Side content controls.",
            methods: [
              "getSideContent",
              "destroySideContent",
              "insertSideContent",
              "addSideContent",
              "removeSideContent",
              "indexOfSideContent",
              "removeAllSideContent"
            ]
          }
        ],
        defaultAggregation: "mainContent",
        events: [
          {
            name: "breakpointChanged",
            visibility: "public",
            since: "1.32",
            description: "Fires when the current breakpoint has been changed.",
            parameters: {
              currentBreakpoint: {
                name: "currentBreakpoint",
                type: "string"
              }
            },
            methods: [
              "attachBreakpointChanged",
              "detachBreakpointChanged",
              "fireBreakpointChanged"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/DynamicSideContent.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>DynamicSideContent</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-side-content/ Dynamic Side Content}"
        ]
      },
      events: [
        {
          name: "breakpointChanged",
          visibility: "public",
          since: "1.32",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    currentBreakpoint: {
                      name: "currentBreakpoint",
                      type: "string",
                      optional: false
                    }
                  }
                }
              }
            }
          ],
          description: "Fires when the current breakpoint has been changed."
        }
      ],
      methods: [
        {
          name: "addMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "oControl",
              type: "object",
              optional: false,
              description: "Object to be added in the aggregation"
            }
          ],
          description:
            "Adds a control to the main content area. Only the main content part in the aggregation is re-rendered."
        },
        {
          name: "addSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "oControl",
              type: "object",
              optional: false,
              description: "Object to be added in the aggregation"
            }
          ],
          description:
            "Adds a control to the side content area. Only the side content part in the aggregation is re-rendered."
        },
        {
          name: "attachBreakpointChanged",
          visibility: "public",
          since: "1.32",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.layout.DynamicSideContent</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:breakpointChanged breakpointChanged} event of this <code>sap.ui.layout.DynamicSideContent</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.DynamicSideContent</code> itself.\n\nFires when the current breakpoint has been changed."
        },
        {
          name: "destroyMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}."
        },
        {
          name: "destroySideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}."
        },
        {
          name: "detachBreakpointChanged",
          visibility: "public",
          since: "1.32",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:breakpointChanged breakpointChanged} event of this <code>sap.ui.layout.DynamicSideContent</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.DynamicSideContent with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireBreakpointChanged",
          visibility: "protected",
          since: "1.32",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                currentBreakpoint: {
                  name: "currentBreakpoint",
                  type: "string",
                  optional: true
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:breakpointChanged breakpointChanged} to attached listeners."
        },
        {
          name: "getContainerQuery",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>containerQuery</code>"
          },
          description:
            "Gets current value of property {@link #getContainerQuery containerQuery}.\n\nIf set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getCurrentBreakpoint",
          visibility: "public",
          returnValue: {
            type: "String",
            description: "currentBreakpoint"
          },
          description:
            "Returns the breakpoint for the current state of the control."
        },
        {
          name: "getEqualSplit",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>equalSplit</code>"
          },
          description:
            "Gets current value of property {@link #getEqualSplit equalSplit}.\n\nDefines whether the control is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMainContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getMainContent mainContent}.\n\nMain content controls."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.DynamicSideContent."
        },
        {
          name: "getShowMainContent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Side content visibility state"
          },
          description: "Gets the value of showMainContent property."
        },
        {
          name: "getShowSideContent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Side content visibility state"
          },
          description: "Gets the value of showSideContent property."
        },
        {
          name: "getSideContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getSideContent sideContent}.\n\nSide content controls."
        },
        {
          name: "getSideContentFallDown",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SideContentFallDown",
            description: "Value of property <code>sideContentFallDown</code>"
          },
          description:
            "Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.\n\nDetermines on which breakpoints the side content falls down below the main content.\n\nDefault value is <code>OnMinimumWidth</code>."
        },
        {
          name: "getSideContentPosition",
          visibility: "public",
          since: "1.36",
          returnValue: {
            type: "sap.ui.layout.SideContentPosition",
            description: "Value of property <code>sideContentPosition</code>"
          },
          description:
            "Gets current value of property {@link #getSideContentPosition sideContentPosition}.\n\nDetermines whether the side content is on the left or on the right side of the main content.\n\nDefault value is <code>End</code>."
        },
        {
          name: "getSideContentVisibility",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SideContentVisibility",
            description: "Value of property <code>sideContentVisibility</code>"
          },
          description:
            "Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.\n\nDetermines on which breakpoints the side content is visible.\n\nDefault value is <code>ShowAboveS</code>."
        },
        {
          name: "indexOfMainContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMainContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The mainContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMainContent mainContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfSideContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oSideContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The sideContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getSideContent sideContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMainContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The mainContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the mainContent should be inserted at; for a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value greater than the current size of the aggregation, the mainContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a mainContent into the aggregation {@link #getMainContent mainContent}."
        },
        {
          name: "insertSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSideContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The sideContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the sideContent should be inserted at; for a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value greater than the current size of the aggregation, the sideContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a sideContent into the aggregation {@link #getSideContent sideContent}."
        },
        {
          name: "removeAllMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMainContent mainContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getSideContent sideContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed mainContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vMainContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The mainContent to remove or its index or id"
            }
          ],
          description:
            "Removes a mainContent from the aggregation {@link #getMainContent mainContent}."
        },
        {
          name: "removeSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed sideContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vSideContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The sideContent to remove or its index or id"
            }
          ],
          description:
            "Removes a sideContent from the aggregation {@link #getSideContent sideContent}."
        },
        {
          name: "setContainerQuery",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bContainerQuery",
              type: "boolean",
              optional: false,
              description: "New value for property <code>containerQuery</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getContainerQuery containerQuery}.\n\nIf set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEqualSplit",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "bState",
              type: "boolean",
              optional: true,
              description: "Determines if the page is set to equalSplit mode"
            }
          ],
          description: "Sets or unsets the page in equalSplit mode."
        },
        {
          name: "setShowMainContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "Determines if the main content part is visible"
            },
            {
              name: "bSuppressVisualUpdate",
              type: "boolean",
              optional: false,
              description: "Determines if the visual state is updated"
            }
          ],
          description: "Sets the showMainContent property."
        },
        {
          name: "setShowSideContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "Determines if the side content part is visible"
            },
            {
              name: "bSuppressVisualUpdate",
              type: "boolean",
              optional: false,
              description: "Determines if the visual state is updated"
            }
          ],
          description: "Sets the showSideContent property."
        },
        {
          name: "setSideContentFallDown",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSideContentFallDown",
              type: "sap.ui.layout.SideContentFallDown",
              optional: false,
              description:
                "New value for property <code>sideContentFallDown</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.\n\nDetermines on which breakpoints the side content falls down below the main content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>OnMinimumWidth</code>."
        },
        {
          name: "setSideContentPosition",
          visibility: "public",
          since: "1.36",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSideContentPosition",
              type: "sap.ui.layout.SideContentPosition",
              optional: false,
              description:
                "New value for property <code>sideContentPosition</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSideContentPosition sideContentPosition}.\n\nDetermines whether the side content is on the left or on the right side of the main content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>End</code>."
        },
        {
          name: "setSideContentVisibility",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          parameters: [
            {
              name: "sVisibility",
              type: "sap.ui.layout.SideContentVisibility",
              optional: false,
              description:
                "Determines on which breakpoints the side content is visible."
            },
            {
              name: "bSuppressVisualUpdate",
              type: "boolean",
              optional: false,
              description: "Determines if the visual state is updated"
            }
          ],
          description: "Sets the sideContentVisibility property."
        },
        {
          name: "toggle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.DynamicSideContent",
            description: "this pointer for chaining"
          },
          description:
            'Used for the toggle button functionality. When the control is on a phone screen size only, one control area is visible. This helper method is used to implement a button/switch for changing between the main and side content areas. Only works if the current breakpoint is "S".'
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.FixFlex",
      basename: "FixFlex",
      resource: "sap/ui/layout/FixFlex.js",
      module: "sap/ui/layout/FixFlex",
      export: "",
      static: true,
      visibility: "public",
      since: "1.25.0",
      extends: "sap.ui.core.Control",
      description:
        "A layout container with a fixed and a flexible part. <h3>Overview</h3> The FixFlex control builds the container for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container. <h4>Guidelines:</h4> <ul> <li>The fix container can hold any number of controls, while the flexible container can hold only one</li> <li>In order for the FixFlex to stretch properly, the parent element, in which the control is placed, needs to have a specified height or needs to have an absolute position.</li> <li>Avoid nesting FixFlex in other flexbox-based layout controls ({@link sap.ui.layout.FixFlex FixFlex}, {@link sap.m.FlexBox FlexBox}, Hbox, Vbox). Otherwise, contents may be not accessible or multiple scrollbars can appear.</li> </ul> <h3>Structure</h3> The behavior of the FixFlex is controlled by the following properties: <ul> <li><code>fixContentSize</code> - The width/height of the fix part of the control</li> <li><code>fixFirst</code> - The ordering of the fix and flex part</li> <li><code>minFlexSize</code> - Scrolling inside the flex part, if its contents are large</li> <li><code>vertical</code> - Alignment of the FixFlex control</li> </ul> <h3>Responsive Behavior</h3> <ul> <li>If the child control of the flex or the fix container has width/height bigger than the container itself, the child control will be cropped in the view.</li> <li>If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the <code>vertical</code> property.</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "vertical",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.",
            methods: ["getVertical", "setVertical"]
          },
          {
            name: "fixFirst",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              'Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").',
            methods: ["getFixFirst", "setFixFirst"]
          },
          {
            name: "fixContentSize",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Dimension",
            visibility: "public",
            description:
              'Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.',
            methods: ["getFixContentSize", "setFixContentSize"]
          },
          {
            name: "minFlexSize",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.29",
            description:
              'Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.',
            methods: ["getMinFlexSize", "setMinFlexSize"]
          }
        ],
        aggregations: [
          {
            name: "fixContent",
            singularName: "fixContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Controls in the fixed part of the layout.",
            methods: [
              "getFixContent",
              "destroyFixContent",
              "insertFixContent",
              "addFixContent",
              "removeFixContent",
              "indexOfFixContent",
              "removeAllFixContent"
            ]
          },
          {
            name: "flexContent",
            singularName: "flexContent",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description: "Control in the stretching part of the layout.",
            methods: ["getFlexContent", "destroyFlexContent", "setFlexContent"]
          }
        ],
        designtime: "sap/ui/layout/designtime/FixFlex.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new FixFlex.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addFixContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFixContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The fixContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some fixContent to the aggregation {@link #getFixContent fixContent}."
        },
        {
          name: "destroyFixContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the fixContent in the aggregation {@link #getFixContent fixContent}."
        },
        {
          name: "destroyFlexContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the flexContent in the aggregation {@link #getFlexContent flexContent}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.FixFlex with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getFixContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getFixContent fixContent}.\n\nControls in the fixed part of the layout."
        },
        {
          name: "getFixContentSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>fixContentSize</code>"
          },
          description:
            'Gets current value of property {@link #getFixContentSize fixContentSize}.\n\nDetermines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.\n\nDefault value is <code>auto</code>.'
        },
        {
          name: "getFixFirst",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>fixFirst</code>"
          },
          description:
            'Gets current value of property {@link #getFixFirst fixFirst}.\n\nDetermines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").\n\nDefault value is <code>true</code>.'
        },
        {
          name: "getFlexContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getFlexContent flexContent}.\n\nControl in the stretching part of the layout."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.FixFlex."
        },
        {
          name: "getMinFlexSize",
          visibility: "public",
          since: "1.29",
          returnValue: {
            type: "int",
            description: "Value of property <code>minFlexSize</code>"
          },
          description:
            'Gets current value of property {@link #getMinFlexSize minFlexSize}.\n\nEnables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.\n\nDefault value is <code>0</code>.'
        },
        {
          name: "getVertical",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>vertical</code>"
          },
          description:
            "Gets current value of property {@link #getVertical vertical}.\n\nDetermines the direction of the layout of child elements. True for vertical and false for horizontal layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfFixContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFixContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The fixContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFixContent fixContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertFixContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFixContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The fixContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the fixContent should be inserted at; for a negative value of <code>iIndex</code>, the fixContent is inserted at position 0; for a value greater than the current size of the aggregation, the fixContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a fixContent into the aggregation {@link #getFixContent fixContent}."
        },
        {
          name: "removeAllFixContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFixContent fixContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeFixContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed fixContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vFixContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The fixContent to remove or its index or id"
            }
          ],
          description:
            "Removes a fixContent from the aggregation {@link #getFixContent fixContent}."
        },
        {
          name: "setFixContentSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFixContentSize",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>fixContentSize</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getFixContentSize fixContentSize}.\n\nDetermines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>auto</code>.'
        },
        {
          name: "setFixFirst",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFixFirst",
              type: "boolean",
              optional: false,
              description: "New value for property <code>fixFirst</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getFixFirst fixFirst}.\n\nDetermines whether the fixed-size area should be on the beginning/top ( if the value is "true") or end/bottom ( if the value is "false").\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.'
        },
        {
          name: "setFlexContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFlexContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The flexContent to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getFlexContent flexContent}."
        },
        {
          name: "setMinFlexSize",
          visibility: "public",
          since: "1.29",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinFlexSize",
              type: "int",
              optional: false,
              description: "New value for property <code>minFlexSize</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getMinFlexSize minFlexSize}.\n\nEnables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger than the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>.'
        },
        {
          name: "setVertical",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.FixFlex",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVertical",
              type: "boolean",
              optional: false,
              description: "New value for property <code>vertical</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVertical vertical}.\n\nDetermines the direction of the layout of child elements. True for vertical and false for horizontal layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.ColumnCells",
      basename: "ColumnCells",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.ColumnCells",
      final: true,
      static: true,
      visibility: "public",
      since: "1.56.0",
      description:
        "An <code>int</code> type that defines how many cells a control inside of a column of a <code>Form</code> control using the <code>ColumnLayout</code> control as layout can use.\n\nAllowed values are numbers from 1 to 12.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "int",
        range: { minExclusive: 0, maxInclusive: 12 }
      }
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.ColumnContainerData",
      basename: "ColumnContainerData",
      resource: "sap/ui/layout/form/ColumnContainerData.js",
      module: "sap/ui/layout/form/ColumnContainerData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.56.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "The <code>ColumnLayout</code>-specific layout data for the <code>FormContainer</code> element.\n\nDepending on its size, the <code>Form</code> control is divided into 1, 2, 3 or 4 columns by the <code>ColumnLayout</code> control. Using <code>ColumnContainerData</code>, the size of the <code>FormContainer</code> element can be influenced.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "columnsXL",
            type: "sap.ui.layout.form.ColumnsXL",
            defaultValue: 2,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.",
            methods: ["getColumnsXL", "setColumnsXL"]
          },
          {
            name: "columnsL",
            type: "sap.ui.layout.form.ColumnsL",
            defaultValue: 2,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.",
            methods: ["getColumnsL", "setColumnsL"]
          },
          {
            name: "columnsM",
            type: "sap.ui.layout.form.ColumnsM",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.",
            methods: ["getColumnsM", "setColumnsM"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.ColumnContainerData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.ColumnContainerData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getColumnsL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsL",
            description: "Value of property <code>columnsL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsL columnsL}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getColumnsM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsM",
            description: "Value of property <code>columnsM</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsM columnsM}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getColumnsXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsXL",
            description: "Value of property <code>columnsXL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsXL columnsXL}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.ColumnContainerData."
        },
        {
          name: "setColumnsL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnContainerData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsL",
              type: "sap.ui.layout.form.ColumnsL",
              optional: false,
              description: "New value for property <code>columnsL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsL columnsL}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setColumnsM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnContainerData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsM",
              type: "sap.ui.layout.form.ColumnsM",
              optional: false,
              description: "New value for property <code>columnsM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsM columnsM}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setColumnsXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnContainerData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsXL",
              type: "sap.ui.layout.form.ColumnsXL",
              optional: false,
              description: "New value for property <code>columnsXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsXL columnsXL}.\n\nNumber of columns the <code>FormContainer</code> element uses if the <code>Form</code> control has extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.ColumnElementData",
      basename: "ColumnElementData",
      resource: "sap/ui/layout/form/ColumnElementData.js",
      module: "sap/ui/layout/form/ColumnElementData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.56.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "The <code>ColumnLayout</code>-specific layout data for the <code>FormElement</code> content fields.\n\nOne <code>FormElement</code> element contains 12 cells and has two sizes, small and large. Using <code>ColumnElementData</code>, the default calculation of the cells used for a field or label can be overwritten.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "cellsLarge",
            type: "sap.ui.layout.form.ColumnCells",
            defaultValue: 8,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of cells used by a field if the <code>FormElement</code> element is large. The label is then beside the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> element is used.",
            methods: ["getCellsLarge", "setCellsLarge"]
          },
          {
            name: "cellsSmall",
            type: "sap.ui.layout.form.ColumnCells",
            defaultValue: 12,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of cells used by a field if the <code>FormElement</code> element is small. The label is then above the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> is used.",
            methods: ["getCellsSmall", "setCellsSmall"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.ColumnElementData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.ColumnElementData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnCells",
            description: "Value of property <code>cellsLarge</code>"
          },
          description:
            "Gets current value of property {@link #getCellsLarge cellsLarge}.\n\nNumber of cells used by a field if the <code>FormElement</code> element is large. The label is then beside the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> element is used.\n\nDefault value is <code>8</code>."
        },
        {
          name: "getCellsSmall",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnCells",
            description: "Value of property <code>cellsSmall</code>"
          },
          description:
            "Gets current value of property {@link #getCellsSmall cellsSmall}.\n\nNumber of cells used by a field if the <code>FormElement</code> element is small. The label is then above the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> is used.\n\nDefault value is <code>12</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.ColumnElementData."
        },
        {
          name: "setCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnElementData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sCellsLarge",
              type: "sap.ui.layout.form.ColumnCells",
              optional: false,
              description: "New value for property <code>cellsLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCellsLarge cellsLarge}.\n\nNumber of cells used by a field if the <code>FormElement</code> element is large. The label is then beside the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> element is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>8</code>."
        },
        {
          name: "setCellsSmall",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnElementData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sCellsSmall",
              type: "sap.ui.layout.form.ColumnCells",
              optional: false,
              description: "New value for property <code>cellsSmall</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCellsSmall cellsSmall}.\n\nNumber of cells used by a field if the <code>FormElement</code> element is small. The label is then above the fields per default.\n\nIf set to <code>12</code>, the full size of the <code>FormElement</code> is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>12</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.ColumnLayout",
      basename: "ColumnLayout",
      resource: "sap/ui/layout/form/ColumnLayout.js",
      module: "sap/ui/layout/form/ColumnLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.56.0",
      extends: "sap.ui.layout.form.FormLayout",
      description:
        "The <code>ColumnLayout</code> control renders a <code>Form</code> control in a column-based responsive way. Depending on its size, the <code>Form</code> control is divided into one or more columns. (XL - max. 4 columns, L - max. 3 columns, M - max. 2 columns and S - 1 column.)\n\nThe <code>FormContainer</code> elements are spread out to the columns depending on the number of <code>FormContainer</code> elements and their size. For example, if there are 4 columns and 2 <code>FormContainer</code> elements, each <code>FormContainer</code> element will use 2 columns. If there are 3 columns and 2 <code>FormContainer</code> elements, the larger one will use 2 columns, the smaller one 1 column. The size of a <code>FormContainer</code> element will be determined based on the number of visible <code>FormElement</code> elements assigned to it. If there are more <code>FormContainer</code> elements than columns, every <code>FormContainer</code> element uses only one column. So the last row of the <code>Form</code> control will not be fully used.\n\nThe default size of the <code>FormContainer</code> element can be overwritten by using <code>ColumnContainerData</code> as <code>LayoutData</code>. If one <code>FormContainer</code> element has <code>ColumnContainerData</code> set, the size calculation of the other <code>FormContainer</code> elements might not lead to the expected result. In this case, use <code>ColumnContainerData</code> also for the other <code>FormContainer</code> elements.\n\nThe <code>FormElement</code> elements are spread out to the columns of a <code>FormContainer</code> element arranged in a newspaper-like order. The position of the labels and fields depends on the size of the used column. If there is enough space, the labels are beside the fields, otherwise above the fields.\n\nThe default size of a content control of a <code>FormElement</code> element can be overwritten using <code>ColumnElementData</code> as <code>LayoutData</code>. If one control assigned to a <code>FormElement</code> element has <code>ColumnElementData</code> set, the size calculation of the other controls assigned to the <code>FormElement</code> element might not lead to the expected result. In this case, use <code>ColumnElementData</code> for the other controls, assigned to the <code>FormElement</code> element, too.\n\nThe placement of the <code>FormElement</code> elements is made by the browser <code>column-count</code> logic. So this can be different in different browsers and lead in some cases to other results than might be expected.\n\n<b>Note:</b> This control cannot be used stand-alone, it just renders a <code>Form</code> control, so it must be assigned to a <code>Form</code> control using the <code>layout</code> aggregation.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "columnsXL",
            type: "sap.ui.layout.form.ColumnsXL",
            defaultValue: 2,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns for extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.",
            methods: ["getColumnsXL", "setColumnsXL"]
          },
          {
            name: "columnsL",
            type: "sap.ui.layout.form.ColumnsL",
            defaultValue: 2,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.",
            methods: ["getColumnsL", "setColumnsL"]
          },
          {
            name: "columnsM",
            type: "sap.ui.layout.form.ColumnsM",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description: "Number of columns for medium size.",
            methods: ["getColumnsM", "setColumnsM"]
          },
          {
            name: "labelCellsLarge",
            type: "sap.ui.layout.form.ColumnCells",
            defaultValue: 4,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines how many cells a label uses if the column is large.",
            methods: ["getLabelCellsLarge", "setLabelCellsLarge"]
          },
          {
            name: "emptyCellsLarge",
            type: "sap.ui.layout.form.EmptyCells",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            description:
              "Defines how many cells are empty at the end of a row. This could be used to keep the fields small on large screens.",
            methods: ["getEmptyCellsLarge", "setEmptyCellsLarge"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>sap.ui.layout.form.ColumnLayout</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.ColumnLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}."
        },
        {
          name: "getColumnsL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsL",
            description: "Value of property <code>columnsL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsL columnsL}.\n\nNumber of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getColumnsM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsM",
            description: "Value of property <code>columnsM</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsM columnsM}.\n\nNumber of columns for medium size.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getColumnsXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnsXL",
            description: "Value of property <code>columnsXL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsXL columnsXL}.\n\nNumber of columns for extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getEmptyCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.EmptyCells",
            description: "Value of property <code>emptyCellsLarge</code>"
          },
          description:
            "Gets current value of property {@link #getEmptyCellsLarge emptyCellsLarge}.\n\nDefines how many cells are empty at the end of a row. This could be used to keep the fields small on large screens.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getLabelCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnCells",
            description: "Value of property <code>labelCellsLarge</code>"
          },
          description:
            "Gets current value of property {@link #getLabelCellsLarge labelCellsLarge}.\n\nDefines how many cells a label uses if the column is large.\n\nDefault value is <code>4</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.ColumnLayout."
        },
        {
          name: "setColumnsL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsL",
              type: "sap.ui.layout.form.ColumnsL",
              optional: false,
              description: "New value for property <code>columnsL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsL columnsL}.\n\nNumber of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setColumnsM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsM",
              type: "sap.ui.layout.form.ColumnsM",
              optional: false,
              description: "New value for property <code>columnsM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsM columnsM}.\n\nNumber of columns for medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setColumnsXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColumnsXL",
              type: "sap.ui.layout.form.ColumnsXL",
              optional: false,
              description: "New value for property <code>columnsXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsXL columnsXL}.\n\nNumber of columns for extra-large size.\n\nThe number of columns for extra-large size must not be smaller than the number of columns for large size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setEmptyCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sEmptyCellsLarge",
              type: "sap.ui.layout.form.EmptyCells",
              optional: false,
              description: "New value for property <code>emptyCellsLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptyCellsLarge emptyCellsLarge}.\n\nDefines how many cells are empty at the end of a row. This could be used to keep the fields small on large screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setLabelCellsLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.ColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sLabelCellsLarge",
              type: "sap.ui.layout.form.ColumnCells",
              optional: false,
              description: "New value for property <code>labelCellsLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelCellsLarge labelCellsLarge}.\n\nDefines how many cells a label uses if the column is large.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>4</code>."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.ColumnsL",
      basename: "ColumnsL",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.ColumnsL",
      final: true,
      static: true,
      visibility: "public",
      since: "1.56.0",
      description:
        "An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has large size\n\nAllowed values are numbers from 1 to 3.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "int",
        range: { minExclusive: 0, maxInclusive: 3 }
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.ColumnsM",
      basename: "ColumnsM",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.ColumnsM",
      final: true,
      static: true,
      visibility: "public",
      since: "1.56.0",
      description:
        "An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has medium size\n\nAllowed values are numbers from 1 to 2.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "int",
        range: { minExclusive: 0, maxInclusive: 2 }
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.ColumnsXL",
      basename: "ColumnsXL",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.ColumnsXL",
      final: true,
      static: true,
      visibility: "public",
      since: "1.56.0",
      description:
        "An <code>int</code> type that defines how many columns a <code>Form</code> control using the <code>ColumnLayout</code> as layout can have if it has extra-large size\n\nAllowed values are numbers from 1 to 4.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "int",
        range: { minExclusive: 0, maxInclusive: 4 }
      }
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.EmptyCells",
      basename: "EmptyCells",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.EmptyCells",
      final: true,
      static: true,
      visibility: "public",
      since: "1.56.0",
      description:
        "An <code>int</code> type that defines how many cells beside the controls inside of a column of a <code>Form</code> control using the <code>ColumnLayout</code> control as layout are empty.\n\nAllowed values are numbers from 0 to 11.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "int",
        range: { minInclusive: 0, maxExclusive: 12 }
      }
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.Form",
      basename: "Form",
      resource: "sap/ui/layout/form/Form.js",
      module: "sap/ui/layout/form/Form",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "A <code>Form</code> control arranges labels and fields (like input fields) into groups and rows. There are different ways to visualize forms for different screen sizes.\n\nA <code>Form</code> is structured into <code>FormContainers</code>. Each <code>FormContainer</code> consists of <code>FormElements</code>. The <code>FormElements</code> consists of a label and the form fields. A <code>Form</code> doesn't render its content by itself. The rendering is done by the assigned <code>FormLayout</code>. This is so that the rendering can be adopted to new UI requirements without changing the <code>Form</code> itself.\n\nFor the content of a <code>Form</code>, <code>VariantLayoutData</code> are supported to allow simple switching of the <code>FormLayout</code>. <code>LayoutData</code> on the content can be used to overwrite the default layout of the <code>Form</code>.\n\nThe <code>Form</code> (and its sub-controls) automatically add label and field assignment to enable screen reader support. It also adds keyboard support to navigate between the fields and groups inside the form.\n\n<b>Warning:</b> Do not put any layout or other container controls into the <code>FormElement</code>. Views are also not supported. This could damage the visual layout, keyboard support and screen-reader support.\n\nIf editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>, otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues like wrong label alignment or wrong spacing between the controls.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description: "Width of the <code>Form</code>.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.20.0",
            description:
              "Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.",
            methods: ["getEditable", "setEditable"]
          }
        ],
        aggregations: [
          {
            name: "formContainers",
            singularName: "formContainer",
            type: "sap.ui.layout.form.FormContainer",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Containers with the content of the form. A <code>FormContainer</code> represents a group inside the <code>Form</code>.",
            methods: [
              "getFormContainers",
              "destroyFormContainers",
              "insertFormContainer",
              "addFormContainer",
              "removeFormContainer",
              "indexOfFormContainer",
              "removeAllFormContainers"
            ]
          },
          {
            name: "title",
            singularName: "title",
            type: "sap.ui.core.Title",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Title of the <code>Form</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element it used, the style of the title can be set.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.",
            methods: ["getTitle", "destroyTitle", "setTitle"]
          },
          {
            name: "toolbar",
            singularName: "toolbar",
            type: "sap.ui.core.Toolbar",
            cardinality: "0..1",
            visibility: "public",
            since: "1.36.0",
            description:
              "Toolbar of the <code>Form</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.",
            methods: ["getToolbar", "destroyToolbar", "setToolbar"]
          },
          {
            name: "layout",
            singularName: "layout",
            type: "sap.ui.layout.form.FormLayout",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Layout of the <code>Form</code>. The assigned <code>Layout</code> renders the <code>Form</code>. We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>, as its responsiveness allows the available space to be used in the best way possible.",
            methods: ["getLayout", "destroyLayout", "setLayout"]
          }
        ],
        defaultAggregation: "formContainers",
        associations: [
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.28.0",
            description:
              "Association to controls / IDs that label this control (see WAI-ARIA attribute <code>aria-labelledby</code>).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/form/Form.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.Form.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          since: "1.28.0",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addFormContainer",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFormContainer",
              type: "sap.ui.layout.form.FormContainer",
              optional: false,
              description:
                "The formContainer to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some formContainer to the aggregation {@link #getFormContainers formContainers}."
        },
        {
          name: "destroyFormContainers",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the formContainers in the aggregation {@link #getFormContainers formContainers}."
        },
        {
          name: "destroyLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the layout in the aggregation {@link #getLayout layout}."
        },
        {
          name: "destroyTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the title in the aggregation {@link #getTitle title}."
        },
        {
          name: "destroyToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the toolbar in the aggregation {@link #getToolbar toolbar}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.Form with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          since: "1.28.0",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getEditable",
          visibility: "public",
          since: "1.20.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nApplies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFormContainers",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.form.FormContainer[]" },
          description:
            "Gets content of aggregation {@link #getFormContainers formContainers}.\n\nContainers with the content of the form. A <code>FormContainer</code> represents a group inside the <code>Form</code>."
        },
        {
          name: "getLayout",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.form.FormLayout" },
          description:
            "Gets content of aggregation {@link #getLayout layout}.\n\nLayout of the <code>Form</code>. The assigned <code>Layout</code> renders the <code>Form</code>. We recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>, as its responsiveness allows the available space to be used in the best way possible."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.Form."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Title|string" },
          description:
            "Gets content of aggregation {@link #getTitle title}.\n\nTitle of the <code>Form</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element it used, the style of the title can be set.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored."
        },
        {
          name: "getToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: { type: "sap.ui.core.Toolbar" },
          description:
            "Gets content of aggregation {@link #getToolbar toolbar}.\n\nToolbar of the <code>Form</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the <code>Form</code>."
        },
        {
          name: "indexOfFormContainer",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFormContainer",
              type: "sap.ui.layout.form.FormContainer",
              optional: false,
              description: "The formContainer whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation {@link #getFormContainers formContainers}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertFormContainer",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFormContainer",
              type: "sap.ui.layout.form.FormContainer",
              optional: false,
              description:
                "The formContainer to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the formContainer should be inserted at; for a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value greater than the current size of the aggregation, the formContainer is inserted at the last position"
            }
          ],
          description:
            "Inserts a formContainer into the aggregation {@link #getFormContainers formContainers}."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          since: "1.28.0",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllFormContainers",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFormContainers formContainers}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          since: "1.28.0",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeFormContainer",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description: "The removed formContainer or <code>null</code>"
          },
          parameters: [
            {
              name: "vFormContainer",
              type: "int|string|sap.ui.layout.form.FormContainer",
              optional: false,
              description: "The formContainer to remove or its index or id"
            }
          ],
          description:
            "Removes a formContainer from the aggregation {@link #getFormContainers formContainers}."
        },
        {
          name: "setEditable",
          visibility: "public",
          since: "1.20.0",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEditable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>editable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEditable editable}.\n\nApplies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLayout",
              type: "sap.ui.layout.form.FormLayout",
              optional: false,
              description: "The layout to set"
            }
          ],
          description: "Sets the aggregated {@link #getLayout layout}."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTitle",
              type: "sap.ui.core.Title|string",
              optional: false,
              description: "The title to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitle title}."
        },
        {
          name: "setToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbar",
              type: "sap.ui.core.Toolbar",
              optional: false,
              description: "The toolbar to set"
            }
          ],
          description: "Sets the aggregated {@link #getToolbar toolbar}."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.Form",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the <code>Form</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.FormContainer",
      basename: "FormContainer",
      resource: "sap/ui/layout/form/FormContainer.js",
      module: "sap/ui/layout/form/FormContainer",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Element",
      description:
        "A <code>FormContainer</code> represents a group inside a <code>Form</code>. It consists of <code>FormElements</code>. The rendering of the <code>FormContainer</code> is done by the <code>FormLayout</code> assigned to the <code>Form</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "expanded",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Container is expanded.\n\n<b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.",
            methods: ["getExpanded", "setExpanded"]
          },
          {
            name: "expandable",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Defines if the <code>FormContainer</code> is expandable.\n\n<b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.",
            methods: ["getExpandable", "setExpandable"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If set to <code>false</code>, the <code>FormContainer</code> is not rendered.",
            methods: ["getVisible", "setVisible"]
          }
        ],
        aggregations: [
          {
            name: "formElements",
            singularName: "formElement",
            type: "sap.ui.layout.form.FormElement",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>FormElements</code> contain the content (labels and fields) of the <code>FormContainers</code>.",
            methods: [
              "getFormElements",
              "destroyFormElements",
              "insertFormElement",
              "addFormElement",
              "removeFormElement",
              "indexOfFormElement",
              "removeAllFormElements"
            ]
          },
          {
            name: "title",
            singularName: "title",
            type: "sap.ui.core.Title",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Title of the <code>FormContainer</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element is used, the style of the title can be set.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.",
            methods: ["getTitle", "destroyTitle", "setTitle"]
          },
          {
            name: "toolbar",
            singularName: "toolbar",
            type: "sap.ui.core.Toolbar",
            cardinality: "0..1",
            visibility: "public",
            since: "1.36.0",
            description:
              "Toolbar of the <code>FormContainer</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.",
            methods: ["getToolbar", "destroyToolbar", "setToolbar"]
          },
          {
            name: "_expandButton",
            singularName: "_expandButton",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_expandButton",
              "destroy_expandButton",
              "set_expandButton"
            ]
          }
        ],
        defaultAggregation: "formElements",
        associations: [
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.36.0",
            description:
              "Association to controls / IDs that label this control (see WAI-ARIA attribute <code>aria-labelledby</code>).\n\n<b>Note:</b> This attribute is only rendered if the <code>FormContainer</code> has it's own DOM representation in the used <code>FormLayout</code>.",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/form/FormContainer.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.FormContainer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addFormElement",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFormElement",
              type: "sap.ui.layout.form.FormElement",
              optional: false,
              description:
                "The formElement to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some formElement to the aggregation {@link #getFormElements formElements}."
        },
        {
          name: "destroyFormElements",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the formElements in the aggregation {@link #getFormElements formElements}."
        },
        {
          name: "destroyTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the title in the aggregation {@link #getTitle title}."
        },
        {
          name: "destroyToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the toolbar in the aggregation {@link #getToolbar toolbar}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.FormContainer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          since: "1.36.0",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getExpandable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expandable</code>"
          },
          description:
            "Gets current value of property {@link #getExpandable expandable}.\n\nDefines if the <code>FormContainer</code> is expandable.\n\n<b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expanded</code>"
          },
          description:
            "Gets current value of property {@link #getExpanded expanded}.\n\nContainer is expanded.\n\n<b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getFormElements",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.form.FormElement[]" },
          description:
            "Gets content of aggregation {@link #getFormElements formElements}.\n\nThe <code>FormElements</code> contain the content (labels and fields) of the <code>FormContainers</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.FormContainer."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Title|string" },
          description:
            "Gets content of aggregation {@link #getTitle title}.\n\nTitle of the <code>FormContainer</code>. Can either be a <code>Title</code> element or a string. If a <code>Title</code> element is used, the style of the title can be set.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored."
        },
        {
          name: "getToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: { type: "sap.ui.core.Toolbar" },
          description:
            "Gets content of aggregation {@link #getToolbar toolbar}.\n\nToolbar of the <code>FormContainer</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nIf set to <code>false</code>, the <code>FormContainer</code> is not rendered.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfFormElement",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFormElement",
              type: "sap.ui.layout.form.FormElement",
              optional: false,
              description: "The formElement whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation {@link #getFormElements formElements}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertFormElement",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFormElement",
              type: "sap.ui.layout.form.FormElement",
              optional: false,
              description:
                "The formElement to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the formElement should be inserted at; for a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value greater than the current size of the aggregation, the formElement is inserted at the last position"
            }
          ],
          description:
            "Inserts a formElement into the aggregation {@link #getFormElements formElements}."
        },
        {
          name: "isVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "If true, the <code>FormContainer</code> is visible, otherwise not"
          },
          description:
            "Determines if the <code>FormContainer</code> is visible or not. Per default it just returns the value of the <code>visible</code> property. But this might be overwritten by inherited elements.\n\nFor rendering by <code>FormLayouts</code> this function has to be used instead of <code>getVisible</code>."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllFormElements",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFormElements formElements}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeFormElement",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description: "The removed formElement or <code>null</code>"
          },
          parameters: [
            {
              name: "vFormElement",
              type: "int|string|sap.ui.layout.form.FormElement",
              optional: false,
              description: "The formElement to remove or its index or id"
            }
          ],
          description:
            "Removes a formElement from the aggregation {@link #getFormElements formElements}."
        },
        {
          name: "setExpandable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpandable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>expandable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExpandable expandable}.\n\nDefines if the <code>FormContainer</code> is expandable.\n\n<b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>expanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExpanded expanded}.\n\nContainer is expanded.\n\n<b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTitle",
              type: "sap.ui.core.Title|string",
              optional: false,
              description: "The title to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitle title}."
        },
        {
          name: "setToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbar",
              type: "sap.ui.core.Toolbar",
              optional: false,
              description: "The toolbar to set"
            }
          ],
          description: "Sets the aggregated {@link #getToolbar toolbar}."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nIf set to <code>false</code>, the <code>FormContainer</code> is not rendered.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.FormElement",
      basename: "FormElement",
      resource: "sap/ui/layout/form/FormElement.js",
      module: "sap/ui/layout/form/FormElement",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Element",
      description:
        "A <code>FormElement</code> represents a row in a <code>FormContainer</code>. A <code>FormElement</code> is a combination of one label and different controls associated to this label.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If set to <code>false</code>, the <code>FormElement</code> is not rendered.",
            methods: ["getVisible", "setVisible"]
          }
        ],
        aggregations: [
          {
            name: "label",
            singularName: "label",
            type: "sap.ui.core.Label",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Label of the fields. Can either be a <code>Label</code> control or a string. If a <code>Label</code> control is used, the properties of the <code>Label</code> can be set. If no assignment between <code>Label</code> and the fields is set via (<code>labelFor</code> property of the <code>Label</code>), it will be done automatically by the <code>FormElement</code>. In this case the <code>Label</code> is assigned to the fields of the <code>FormElement</code>.",
            methods: ["getLabel", "destroyLabel", "setLabel"]
          },
          {
            name: "_label",
            singularName: "_label",
            type: "sap.ui.core.Label",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_label", "destroy_label", "set_label"]
          },
          {
            name: "fields",
            singularName: "field",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Form controls that belong together to be displayed in one row of a <code>Form</code>.\n\n<b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not supported. Allowed controls implement the interface <code>sap.ui.core.IFormContent</code>.",
            methods: [
              "getFields",
              "destroyFields",
              "insertField",
              "addField",
              "removeField",
              "indexOfField",
              "removeAllFields"
            ]
          }
        ],
        defaultAggregation: "fields",
        designtime: "sap/ui/layout/designtime/form/FormElement.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.FormElement.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addField",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oField",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The field to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some field to the aggregation {@link #getFields fields}."
        },
        {
          name: "destroyFields",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the fields in the aggregation {@link #getFields fields}."
        },
        {
          name: "destroyLabel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the label in the aggregation {@link #getLabel label}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.FormElement with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getFields",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getFields fields}.\n\nForm controls that belong together to be displayed in one row of a <code>Form</code>.\n\n<b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only form controls are allowed. Views are also not supported. Allowed controls implement the interface <code>sap.ui.core.IFormContent</code>."
        },
        {
          name: "getLabel",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Label|string" },
          description:
            "Gets content of aggregation {@link #getLabel label}.\n\nLabel of the fields. Can either be a <code>Label</code> control or a string. If a <code>Label</code> control is used, the properties of the <code>Label</code> can be set. If no assignment between <code>Label</code> and the fields is set via (<code>labelFor</code> property of the <code>Label</code>), it will be done automatically by the <code>FormElement</code>. In this case the <code>Label</code> is assigned to the fields of the <code>FormElement</code>."
        },
        {
          name: "getLabelControl",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Label",
            description: "<code>Label</code> control used to render the label"
          },
          description:
            "Returns the <code>Label</code> of the <code>FormElement</code>, even if the <code>Label</code> is assigned as string. The <code>FormLayout</code> needs the information of the label to render the <code>Form</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.FormElement."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nIf set to <code>false</code>, the <code>FormElement</code> is not rendered.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfField",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oField",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The field whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getFields fields}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertField",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oField",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The field to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the field should be inserted at; for a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value greater than the current size of the aggregation, the field is inserted at the last position"
            }
          ],
          description:
            "Inserts a field into the aggregation {@link #getFields fields}."
        },
        {
          name: "isVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "If true, the <code>FormElement</code> is visible, otherwise not"
          },
          description:
            "Determines if the <code>FormElement</code> is visible or not. Per default it just returns the value of the <code>visible</code> property. But this might be overwritten by inherited elements.\n\nFor rendering by <code>FormLayouts</code> this function has to be used instead of <code>getVisible</code>."
        },
        {
          name: "removeAllFields",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFields fields}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeField",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed field or <code>null</code>"
          },
          parameters: [
            {
              name: "vField",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The field to remove or its index or id"
            }
          ],
          description:
            "Removes a field from the aggregation {@link #getFields fields}."
        },
        {
          name: "setLabel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vLabel",
              type: "sap.ui.core.Label|string",
              optional: false,
              description: "The label to set"
            }
          ],
          description: "Sets the aggregated {@link #getLabel label}."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.FormElement",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nIf set to <code>false</code>, the <code>FormElement</code> is not rendered.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.FormLayout",
      basename: "FormLayout",
      resource: "sap/ui/layout/form/FormLayout.js",
      module: "sap/ui/layout/form/FormLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "Base layout to render a <code>Form</code>. Other layouts to render a <code>Form</code> must inherit from this one.\n\n<b>Note:</b> This control must not be used to render a <code>Form</code> in productive applications as it does not fulfill any design guidelines and usability standards.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "backgroundDesign",
            type: "sap.ui.layout.BackgroundDesign",
            defaultValue: "Translucent",
            group: "Appearance",
            visibility: "public",
            since: "1.36.0",
            description:
              "Specifies the background color of the <code>Form</code> content.\n\n<b>Note:</b> The visualization of the different options depends on the theme used.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.FormLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.FormLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getBackgroundDesign",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.BackgroundDesign",
            description: "Value of property <code>backgroundDesign</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the <code>Form</code> content.\n\n<b>Note:</b> The visualization of the different options depends on the theme used.\n\nDefault value is <code>Translucent</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.FormLayout."
        },
        {
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.FormLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesign",
              type: "sap.ui.layout.BackgroundDesign",
              optional: false,
              description:
                "New value for property <code>backgroundDesign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the <code>Form</code> content.\n\n<b>Note:</b> The visualization of the different options depends on the theme used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Translucent</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.GridContainerData",
      basename: "GridContainerData",
      resource: "sap/ui/layout/form/GridContainerData.js",
      module: "sap/ui/layout/form/GridContainerData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "The <code>GridLayout</code>-specific layout data for <code>FormContainers</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "halfGrid",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells). If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.",
            methods: ["getHalfGrid", "setHalfGrid"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.GridContainerData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.GridContainerData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getHalfGrid",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>halfGrid</code>"
          },
          description:
            "Gets current value of property {@link #getHalfGrid halfGrid}.\n\nIf set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells). If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.GridContainerData."
        },
        {
          name: "setHalfGrid",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.GridContainerData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHalfGrid",
              type: "boolean",
              optional: false,
              description: "New value for property <code>halfGrid</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHalfGrid halfGrid}.\n\nIf set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells). If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.form.GridElementCells",
      basename: "GridElementCells",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.GridElementCells",
      static: true,
      visibility: "public",
      description:
        'A string that defines the number of used cells in a <code>GridLayout</code>. This can be a number from 1 to 16, "auto" or "full". If set to "auto" the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells. If set to "full" only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size has no effect.',
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "string",
        pattern: "^(auto|full|([1-9]|1[0-6]))$"
      }
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.GridElementData",
      basename: "GridElementData",
      resource: "sap/ui/layout/form/GridElementData.js",
      module: "sap/ui/layout/form/GridElementData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "The <code>GridLayout</code>-specific layout data for <code>FormElement</code> fields.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "hCells",
            type: "sap.ui.layout.form.GridElementCells",
            defaultValue: "auto",
            group: "Appearance",
            visibility: "public",
            description:
              "Number of cells in horizontal direction.\n\nIf set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.\n\nIf set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.\n\n<b>Note:</b> For labels, the full size setting has no effect.",
            methods: ["getHCells", "setHCells"]
          },
          {
            name: "vCells",
            type: "int",
            defaultValue: 1,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of cells in vertical direction.\n\n<b>Note:</b> This property has no effect on labels.",
            methods: ["getVCells", "setVCells"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.GridElementData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.GridElementData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getHCells",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.GridElementCells",
            description: "Value of property <code>hCells</code>"
          },
          description:
            "Gets current value of property {@link #getHCells hCells}.\n\nNumber of cells in horizontal direction.\n\nIf set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.\n\nIf set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.\n\n<b>Note:</b> For labels, the full size setting has no effect.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.GridElementData."
        },
        {
          name: "getVCells",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>vCells</code>"
          },
          description:
            "Gets current value of property {@link #getVCells vCells}.\n\nNumber of cells in vertical direction.\n\n<b>Note:</b> This property has no effect on labels.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setHCells",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.GridElementData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHCells",
              type: "sap.ui.layout.form.GridElementCells",
              optional: false,
              description: "New value for property <code>hCells</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHCells hCells}.\n\nNumber of cells in horizontal direction.\n\nIf set to <code>auto</code>, the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.\n\nIf set to <code>full</code>, only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above.\n\n<b>Note:</b> For labels, the full size setting has no effect.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "setVCells",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.GridElementData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iVCells",
              type: "int",
              optional: false,
              description: "New value for property <code>vCells</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVCells vCells}.\n\nNumber of cells in vertical direction.\n\n<b>Note:</b> This property has no effect on labels.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.GridLayout",
      basename: "GridLayout",
      resource: "sap/ui/layout/form/GridLayout.js",
      module: "sap/ui/layout/form/GridLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.layout.form.FormLayout",
      description:
        "This <code>FormLayout</code> renders a <code>Form</code> using an HTML-table based grid. This can be a 16 column grid or an 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or widths of the <code>Form</code>. Only the width of the single grid columns depends on the available width.\n\nTo adjust the appearance inside the <code>GridLayout</code>, you can use <code>GridContainerData</code> for <code>FormContainers</code> and <code>GridElementData</code> for content fields.\n\n<b>Note:</b> If content fields have a <code>width</code> property this will be ignored, as the width of the controls is set by the grid cells.\n\nThis control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "singleColumn",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.\n\nIf not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.",
            methods: ["getSingleColumn", "setSingleColumn"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.GridLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.GridLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.GridLayout."
        },
        {
          name: "getSingleColumn",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>singleColumn</code>"
          },
          description:
            "Gets current value of property {@link #getSingleColumn singleColumn}.\n\nIf set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.\n\nIf not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSingleColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.GridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSingleColumn",
              type: "boolean",
              optional: false,
              description: "New value for property <code>singleColumn</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSingleColumn singleColumn}.\n\nIf set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.\n\nIf not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.ResponsiveGridLayout",
      basename: "ResponsiveGridLayout",
      resource: "sap/ui/layout/form/ResponsiveGridLayout.js",
      module: "sap/ui/layout/form/ResponsiveGridLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.layout.form.FormLayout",
      description:
        "The <code>ResponsiveGridLayout</code> control renders a <code>Form</code> using a responsive grid. Internally the <code>Grid</code> control is used for rendering. Using this layout, the <code>Form</code> is rendered in a responsive way. Depending on the available space, the <code>FormContainers</code> are rendered in one or different columns and the labels are rendered in the same row as the fields or above the fields. This behavior can be influenced by the properties of this layout control.\n\nOn the <code>FormContainers</code>, labels and content fields, <code>GridData</code> can be used to change the default rendering. <code>GridData</code> is not supported for <code>FormElements</code>.\n\n<b>Note:</b> If <code>GridData</code> is used, this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result. In such cases, <code>GridData</code> should be used for all content controls to disable the default behavior.\n\nThis control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "labelSpanXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Default span for labels in extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.",
            methods: ["getLabelSpanXL", "setLabelSpanXL"]
          },
          {
            name: "labelSpanL",
            type: "int",
            defaultValue: 4,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Default span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.",
            methods: ["getLabelSpanL", "setLabelSpanL"]
          },
          {
            name: "labelSpanM",
            type: "int",
            defaultValue: 2,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Default span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.",
            methods: ["getLabelSpanM", "setLabelSpanM"]
          },
          {
            name: "labelSpanS",
            type: "int",
            defaultValue: 12,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description: "Default span for labels in small size.",
            methods: ["getLabelSpanS", "setLabelSpanS"]
          },
          {
            name: "adjustLabelSpan",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own <code>Grid</code> inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.",
            methods: ["getAdjustLabelSpan", "setAdjustLabelSpan"]
          },
          {
            name: "emptySpanXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Number of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.",
            methods: ["getEmptySpanXL", "setEmptySpanXL"]
          },
          {
            name: "emptySpanL",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on large size.",
            methods: ["getEmptySpanL", "setEmptySpanL"]
          },
          {
            name: "emptySpanM",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on medium size.",
            methods: ["getEmptySpanM", "setEmptySpanM"]
          },
          {
            name: "emptySpanS",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on small size.",
            methods: ["getEmptySpanS", "setEmptySpanS"]
          },
          {
            name: "columnsXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Number of columns for extra large size.\n\nThe number of columns for extra large size must not be smaller than the number of columns for large size. <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).",
            methods: ["getColumnsXL", "setColumnsXL"]
          },
          {
            name: "columnsL",
            type: "int",
            defaultValue: 2,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.",
            methods: ["getColumnsL", "setColumnsL"]
          },
          {
            name: "columnsM",
            type: "int",
            defaultValue: 1,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description: "Number of columns for medium size.",
            methods: ["getColumnsM", "setColumnsM"]
          },
          {
            name: "singleContainerFullSize",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.",
            methods: [
              "getSingleContainerFullSize",
              "setSingleContainerFullSize"
            ]
          },
          {
            name: "breakpointXL",
            type: "int",
            defaultValue: 1440,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Breakpoint (in pixel) between large size and extra large (XL) size.",
            methods: ["getBreakpointXL", "setBreakpointXL"]
          },
          {
            name: "breakpointL",
            type: "int",
            defaultValue: 1024,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Breakpoint (in pixel) between Medium size and Large size.",
            methods: ["getBreakpointL", "setBreakpointL"]
          },
          {
            name: "breakpointM",
            type: "int",
            defaultValue: 600,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Breakpoint (in pixel) between Small size and Medium size.",
            methods: ["getBreakpointM", "setBreakpointM"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>sap.ui.layout.form.ResponsiveGridLayout</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}."
        },
        {
          name: "getAdjustLabelSpan",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>adjustLabelSpan</code>"
          },
          description:
            "Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.\n\nIf set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own <code>Grid</code> inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getBreakpointL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointL</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointL breakpointL}.\n\nBreakpoint (in pixel) between Medium size and Large size.\n\nDefault value is <code>1024</code>."
        },
        {
          name: "getBreakpointM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointM</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointM breakpointM}.\n\nBreakpoint (in pixel) between Small size and Medium size.\n\nDefault value is <code>600</code>."
        },
        {
          name: "getBreakpointXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointXL</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointXL breakpointXL}.\n\nBreakpoint (in pixel) between large size and extra large (XL) size.\n\nDefault value is <code>1440</code>."
        },
        {
          name: "getColumnsL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsL columnsL}.\n\nNumber of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getColumnsM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsM</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsM columnsM}.\n\nNumber of columns for medium size.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getColumnsXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsXL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsXL columnsXL}.\n\nNumber of columns for extra large size.\n\nThe number of columns for extra large size must not be smaller than the number of columns for large size. <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getEmptySpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanL</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanL emptySpanL}.\n\nNumber of grid cells that are empty at the end of each line on large size.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanM</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanM emptySpanM}.\n\nNumber of grid cells that are empty at the end of each line on medium size.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanS</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanS emptySpanS}.\n\nNumber of grid cells that are empty at the end of each line on small size.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanXL</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanXL emptySpanXL}.\n\nNumber of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getLabelSpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanL</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanL labelSpanL}.\n\nDefault span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.\n\nDefault value is <code>4</code>."
        },
        {
          name: "getLabelSpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanM</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanM labelSpanM}.\n\nDefault span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getLabelSpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanS</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanS labelSpanS}.\n\nDefault span for labels in small size.\n\nDefault value is <code>12</code>."
        },
        {
          name: "getLabelSpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanXL</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanXL labelSpanXL}.\n\nDefault span for labels in extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout."
        },
        {
          name: "getSingleContainerFullSize",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>singleContainerFullSize</code>"
          },
          description:
            "Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.\n\nIf the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setAdjustLabelSpan",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAdjustLabelSpan",
              type: "boolean",
              optional: false,
              description: "New value for property <code>adjustLabelSpan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.\n\nIf set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own <code>Grid</code> inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setBreakpointL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointL",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointL breakpointL}.\n\nBreakpoint (in pixel) between Medium size and Large size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1024</code>."
        },
        {
          name: "setBreakpointM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointM",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointM breakpointM}.\n\nBreakpoint (in pixel) between Small size and Medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>600</code>."
        },
        {
          name: "setBreakpointXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointXL",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointXL breakpointXL}.\n\nBreakpoint (in pixel) between large size and extra large (XL) size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1440</code>."
        },
        {
          name: "setColumnsL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsL",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsL columnsL}.\n\nNumber of columns for large size.\n\nThe number of columns for large size must not be smaller than the number of columns for medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setColumnsM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsM",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsM columnsM}.\n\nNumber of columns for medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setColumnsXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsXL",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsXL columnsXL}.\n\nNumber of columns for extra large size.\n\nThe number of columns for extra large size must not be smaller than the number of columns for large size. <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setEmptySpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanL",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanL emptySpanL}.\n\nNumber of grid cells that are empty at the end of each line on large size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanM",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanM emptySpanM}.\n\nNumber of grid cells that are empty at the end of each line on medium size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanS",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanS emptySpanS}.\n\nNumber of grid cells that are empty at the end of each line on small size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanXL",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.\n\nNumber of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setLabelSpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanL",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanL labelSpanL}.\n\nDefault span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>4</code>."
        },
        {
          name: "setLabelSpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanM",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanM labelSpanM}.\n\nDefault span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setLabelSpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanS",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanS labelSpanS}.\n\nDefault span for labels in small size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>12</code>."
        },
        {
          name: "setLabelSpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanXL",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.\n\nDefault span for labels in extra large size.\n\n<b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setSingleContainerFullSize",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.ResponsiveGridLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSingleContainerFullSize",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>singleContainerFullSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.\n\nIf the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.ResponsiveLayout",
      basename: "ResponsiveLayout",
      resource: "sap/ui/layout/form/ResponsiveLayout.js",
      module: "sap/ui/layout/form/ResponsiveLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.layout.form.FormLayout",
      description:
        "The <code>ResponsiveLayout</code> renders a <code>Form</code> with a responsive layout. Internally the <code>ResponsiveFlowLayout</code> is used. The responsiveness of this layout tries to best use the available space. This means that the order of the <code>FormContainers</code>, labels and fields depends on the available space.\n\nOn the <code>FormContainers</code>, <code>FormElements</code>, labels and content fields, <code>ResponsiveFlowLayoutData</code> can be used to change the default rendering.\n\nWe suggest using the <code>ResponsiveGridLayout</code> instead of this layout because this is easier to consume and brings more stable responsive output.\n\n<b>Note:</b> If <code>ResponsiveFlowLayoutData</code> are used this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result. In such cases, <code>ResponsiveFlowLayoutData</code> should be used for all content controls to disable the default behavior.\n\nThis control cannot be used stand-alone, it just renders a <code>Form</code>, so it must be assigned to a <code>Form</code> using the <code>layout</code> aggregation.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "control" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.ResponsiveLayout."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.form.SimpleForm",
      basename: "SimpleForm",
      resource: "sap/ui/layout/form/SimpleForm.js",
      module: "sap/ui/layout/form/SimpleForm",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "The <code>SimpleForm</code> provides an easy-to-use API to create simple forms. Inside a <code>SimpleForm</code>, a <code>Form</code> control is created along with its <code>FormContainers</code> and <code>FormElements</code>, but the complexity in the API is removed. <ul> <li>A new <code>Title</code> or <code>Toolbar</code> starts a new group (<code>FormContainer</code>) in the form.</li> <li>A new <code>Label</code> starts a new row (<code>FormElement</code>) in the form.</li> <li>All other controls will be assigned to the row (<code>FormElement</code>) that started with the last label.</li> </ul> Use <code>LayoutData</code> to influence the layout for special cases in the Input/Display controls.\n\n<b>Note:</b> If a more complex form is needed, use <code>Form</code> instead.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "maxContainerCols",
            type: "int",
            defaultValue: 2,
            group: "Appearance",
            visibility: "public",
            description:
              "The maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.\n\n<b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a <code>layout</code>, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.",
            methods: ["getMaxContainerCols", "setMaxContainerCols"]
          },
          {
            name: "minWidth",
            type: "int",
            defaultValue: -1,
            group: "Appearance",
            visibility: "public",
            description:
              "The overall minimum width in pixels that is used for the <code>SimpleForm</code>.\n\nIf the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>FormContainer</code>). The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until <code>maxContainerCols</code> is reached, irrespective of whether a <code>width</code> is reached or the available parents width is reached.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.",
            methods: ["getMinWidth", "setMinWidth"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            since: "1.28.0",
            description: "Width of the form.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Applies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.",
            methods: ["getEditable", "setEditable"]
          },
          {
            name: "labelMinWidth",
            type: "int",
            defaultValue: 192,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies the min-width in pixels of the label in all form rows.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.",
            methods: ["getLabelMinWidth", "setLabelMinWidth"]
          },
          {
            name: "layout",
            type: "sap.ui.layout.form.SimpleFormLayout",
            defaultValue: "ResponsiveLayout",
            group: "Misc",
            visibility: "public",
            description:
              "The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.\n\nWe recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.\n\n<b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.",
            methods: ["getLayout", "setLayout"]
          },
          {
            name: "labelSpanXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Default span for labels in extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).",
            methods: ["getLabelSpanXL", "setLabelSpanXL"]
          },
          {
            name: "labelSpanL",
            type: "int",
            defaultValue: 4,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Default span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.\n\n<b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.",
            methods: ["getLabelSpanL", "setLabelSpanL"]
          },
          {
            name: "labelSpanM",
            type: "int",
            defaultValue: 2,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Default span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getLabelSpanM", "setLabelSpanM"]
          },
          {
            name: "labelSpanS",
            type: "int",
            defaultValue: 12,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Default span for labels in small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getLabelSpanS", "setLabelSpanS"]
          },
          {
            name: "adjustLabelSpan",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own grid inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getAdjustLabelSpan", "setAdjustLabelSpan"]
          },
          {
            name: "emptySpanXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Number of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).",
            methods: ["getEmptySpanXL", "setEmptySpanXL"]
          },
          {
            name: "emptySpanL",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.",
            methods: ["getEmptySpanL", "setEmptySpanL"]
          },
          {
            name: "emptySpanM",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getEmptySpanM", "setEmptySpanM"]
          },
          {
            name: "emptySpanS",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Number of grid cells that are empty at the end of each line on small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getEmptySpanS", "setEmptySpanS"]
          },
          {
            name: "columnsXL",
            type: "int",
            defaultValue: -1,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).",
            methods: ["getColumnsXL", "setColumnsXL"]
          },
          {
            name: "columnsL",
            type: "int",
            defaultValue: 2,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.",
            methods: ["getColumnsL", "setColumnsL"]
          },
          {
            name: "columnsM",
            type: "int",
            defaultValue: 1,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Form columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.",
            methods: ["getColumnsM", "setColumnsM"]
          },
          {
            name: "singleContainerFullSize",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: [
              "getSingleContainerFullSize",
              "setSingleContainerFullSize"
            ]
          },
          {
            name: "breakpointXL",
            type: "int",
            defaultValue: 1440,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Breakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getBreakpointXL", "setBreakpointXL"]
          },
          {
            name: "breakpointL",
            type: "int",
            defaultValue: 1024,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Breakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getBreakpointL", "setBreakpointL"]
          },
          {
            name: "breakpointM",
            type: "int",
            defaultValue: 600,
            group: "Misc",
            visibility: "public",
            since: "1.16.3",
            description:
              "Breakpoint between Small size and Medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.",
            methods: ["getBreakpointM", "setBreakpointM"]
          },
          {
            name: "backgroundDesign",
            type: "sap.ui.layout.BackgroundDesign",
            defaultValue: "Translucent",
            group: "Appearance",
            visibility: "public",
            since: "1.36.0",
            description:
              "Specifies the background color of the <code>SimpleForm</code> content.\n\nThe visualization of the different options depends on the used theme.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Element",
            cardinality: "0..n",
            visibility: "public",
            description:
              'The content of the form is structured in the following way: <ul> <li>Add a <code>Title</code> or <code>Toolbar</code> control to start a new group (<code>FormContainer</code>).</li> <li>Add a <code>Label</code> control to start a new row (<code>FormElement</code>).</li> <li>Add controls as input fields, text fields or other as needed.</li> <li>Use <code>LayoutData</code> to influence the layout for special cases in the single controls. For example, if a <code>ResponsiveLayout</code> is used as a layout, the form content is weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls should influence their width, you can add <code>sap.ui.layout.ResponsiveFlowLayoutData</code> to them via <code>setLayoutData</code> method. Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more than 5, as this is the total width of the input control part of each form row.</li> </ul> Example for a row where the <code>Input</code> weight 4 and the second <code>Input</code> weight 1 (using <code>ResponsiveLayout</code>): <pre>\nnew sap.m.Label({text:"Label"});\nnew sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),\nnew sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),\n</pre>\n\nFor example, if a <code>ResponsiveGridLayout</code> is used as a layout, there are 12 cells in one row. Depending on the screen size the labels use the defined <code>labelSpan</code>. The remaining cells are used for the fields (and <code>emptySpan</code> if defined). The available cells are distributed to all fields in the row. If one field should use a fixed number of cells you can add <code>sap.ui.layout.GridData</code> to them via <code>setLayoutData</code> method. If there are additional fields in the row they will get the remaining cells. </ul> Example for a row with two <code>Input</code> controls where one uses four cells on small screens, one cell on medium screens and 2 cells on larger screens (using <code>ResponsiveGridLayout</code>): <pre>\nnew sap.m.Label({text:"Label"});\nnew sap.m.Input({value:"auto size"}),\nnew sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),\n</pre>\n\n<b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are allowed. Views are also not supported. Allowed form controls implement the interface <code>sap.ui.core.IFormContent</code>.\n\nIf editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>, otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues like wrong label alignment or wrong spacing between the controls.',
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "form",
            singularName: "form",
            type: "sap.ui.layout.form.Form",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Hidden, for internal use only.",
            methods: ["getForm", "destroyForm", "setForm"]
          },
          {
            name: "title",
            singularName: "title",
            type: "sap.ui.core.Title",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            since: "1.16.3",
            description:
              "Title element of the <code>SimpleForm</code>. Can either be a <code>Title</code> element, or a string.",
            methods: ["getTitle", "destroyTitle", "setTitle"]
          },
          {
            name: "toolbar",
            singularName: "toolbar",
            type: "sap.ui.core.Toolbar",
            cardinality: "0..1",
            visibility: "public",
            since: "1.36.0",
            description:
              "Toolbar of the <code>SimpleForm</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.",
            methods: ["getToolbar", "destroyToolbar", "setToolbar"]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.32.0",
            description:
              "Association to controls / IDs which label this control (see WAI-ARIA attribute <code>aria-labelledby</code>).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/form/SimpleForm.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new sap.ui.layout.form.SimpleForm.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyTitle",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the title in the aggregation {@link #getTitle title}."
        },
        {
          name: "destroyToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the toolbar in the aggregation {@link #getToolbar toolbar}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.form.SimpleForm with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAdjustLabelSpan",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>adjustLabelSpan</code>"
          },
          description:
            "Gets current value of property {@link #getAdjustLabelSpan adjustLabelSpan}.\n\nIf set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own grid inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          since: "1.32.0",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getBackgroundDesign",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.BackgroundDesign",
            description: "Value of property <code>backgroundDesign</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the <code>SimpleForm</code> content.\n\nThe visualization of the different options depends on the used theme.\n\nDefault value is <code>Translucent</code>."
        },
        {
          name: "getBreakpointL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointL</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointL breakpointL}.\n\nBreakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>1024</code>."
        },
        {
          name: "getBreakpointM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointM</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointM breakpointM}.\n\nBreakpoint between Small size and Medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>600</code>."
        },
        {
          name: "getBreakpointXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>breakpointXL</code>"
          },
          description:
            "Gets current value of property {@link #getBreakpointXL breakpointXL}.\n\nBreakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>1440</code>."
        },
        {
          name: "getColumnsL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsL columnsL}.\n\nForm columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getColumnsM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsM</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsM columnsM}.\n\nForm columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getColumnsXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnsXL</code>"
          },
          description:
            "Gets current value of property {@link #getColumnsXL columnsXL}.\n\nForm columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Element[]" },
          description:
            'Gets content of aggregation {@link #getContent content}.\n\nThe content of the form is structured in the following way: <ul> <li>Add a <code>Title</code> or <code>Toolbar</code> control to start a new group (<code>FormContainer</code>).</li> <li>Add a <code>Label</code> control to start a new row (<code>FormElement</code>).</li> <li>Add controls as input fields, text fields or other as needed.</li> <li>Use <code>LayoutData</code> to influence the layout for special cases in the single controls. For example, if a <code>ResponsiveLayout</code> is used as a layout, the form content is weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column is 192 pixels wide. If your input controls should influence their width, you can add <code>sap.ui.layout.ResponsiveFlowLayoutData</code> to them via <code>setLayoutData</code> method. Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more than 5, as this is the total width of the input control part of each form row.</li> </ul> Example for a row where the <code>Input</code> weight 4 and the second <code>Input</code> weight 1 (using <code>ResponsiveLayout</code>): <pre>\nnew sap.m.Label({text:"Label"});\nnew sap.m.Input({value:"Weight 4", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),\nnew sap.m.Input({value:"Weight 1", layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),\n</pre>\n\nFor example, if a <code>ResponsiveGridLayout</code> is used as a layout, there are 12 cells in one row. Depending on the screen size the labels use the defined <code>labelSpan</code>. The remaining cells are used for the fields (and <code>emptySpan</code> if defined). The available cells are distributed to all fields in the row. If one field should use a fixed number of cells you can add <code>sap.ui.layout.GridData</code> to them via <code>setLayoutData</code> method. If there are additional fields in the row they will get the remaining cells. </ul> Example for a row with two <code>Input</code> controls where one uses four cells on small screens, one cell on medium screens and 2 cells on larger screens (using <code>ResponsiveGridLayout</code>): <pre>\nnew sap.m.Label({text:"Label"});\nnew sap.m.Input({value:"auto size"}),\nnew sap.m.Input({value:"fix size", layoutData: new sap.ui.layout.GridData({span: "XL1 L1 M2 S4"})}),\n</pre>\n\n<b>Warning:</b> Do not put any layout or other container controls in here. This could damage the visual layout, keyboard support and screen-reader support. Only labels, titles, toolbars and form controls are allowed. Views are also not supported. Allowed form controls implement the interface <code>sap.ui.core.IFormContent</code>.\n\nIf editable controls are used as content, the <code>editable</code> property must be set to <code>true</code>, otherwise to <code>false</code>. If the <code>editable</code> property is set incorrectly, there will be visual issues like wrong label alignment or wrong spacing between the controls.'
        },
        {
          name: "getEditable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nApplies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly."
        },
        {
          name: "getEmptySpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanL</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanL emptySpanL}.\n\nNumber of grid cells that are empty at the end of each line on large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanM</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanM emptySpanM}.\n\nNumber of grid cells that are empty at the end of each line on medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanS</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanS emptySpanS}.\n\nNumber of grid cells that are empty at the end of each line on small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getEmptySpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>emptySpanXL</code>"
          },
          description:
            "Gets current value of property {@link #getEmptySpanXL emptySpanXL}.\n\nNumber of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getLabelMinWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelMinWidth</code>"
          },
          description:
            "Gets current value of property {@link #getLabelMinWidth labelMinWidth}.\n\nSpecifies the min-width in pixels of the label in all form rows.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.\n\nDefault value is <code>192</code>."
        },
        {
          name: "getLabelSpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanL</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanL labelSpanL}.\n\nDefault span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.\n\n<b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.\n\nDefault value is <code>4</code>."
        },
        {
          name: "getLabelSpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanM</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanM labelSpanM}.\n\nDefault span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getLabelSpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanS</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanS labelSpanS}.\n\nDefault span for labels in small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>12</code>."
        },
        {
          name: "getLabelSpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>labelSpanXL</code>"
          },
          description:
            "Gets current value of property {@link #getLabelSpanXL labelSpanXL}.\n\nDefault span for labels in extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleFormLayout",
            description: "Value of property <code>layout</code>"
          },
          description:
            "Gets current value of property {@link #getLayout layout}.\n\nThe <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.\n\nWe recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.\n\n<b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.\n\nDefault value is <code>ResponsiveLayout</code>."
        },
        {
          name: "getMaxContainerCols",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>maxContainerCols</code>"
          },
          description:
            "Gets current value of property {@link #getMaxContainerCols maxContainerCols}.\n\nThe maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.\n\n<b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a <code>layout</code>, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.\n\nDefault value is <code>2</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.form.SimpleForm."
        },
        {
          name: "getMinWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>minWidth</code>"
          },
          description:
            "Gets current value of property {@link #getMinWidth minWidth}.\n\nThe overall minimum width in pixels that is used for the <code>SimpleForm</code>.\n\nIf the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>FormContainer</code>). The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until <code>maxContainerCols</code> is reached, irrespective of whether a <code>width</code> is reached or the available parents width is reached.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getSingleContainerFullSize",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>singleContainerFullSize</code>"
          },
          description:
            "Gets current value of property {@link #getSingleContainerFullSize singleContainerFullSize}.\n\nIf the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          since: "1.16.3",
          returnValue: { type: "sap.ui.core.Title|string" },
          description:
            "Gets content of aggregation {@link #getTitle title}.\n\nTitle element of the <code>SimpleForm</code>. Can either be a <code>Title</code> element, or a string."
        },
        {
          name: "getToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: { type: "sap.ui.core.Toolbar" },
          description:
            "Gets content of aggregation {@link #getToolbar toolbar}.\n\nToolbar of the <code>SimpleForm</code>.\n\n<b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored. If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>. In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association."
        },
        {
          name: "getWidth",
          visibility: "public",
          since: "1.28.0",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the form."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Element",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Element",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setAdjustLabelSpan",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAdjustLabelSpan",
              type: "boolean",
              optional: false,
              description: "New value for property <code>adjustLabelSpan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAdjustLabelSpan adjustLabelSpan}.\n\nIf set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row. If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label. This is the same for medium and large <code>Forms</code>. This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code> (because every <code>FormContainer</code> has its own grid inside).\n\nIf not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size. The number of <code>FormContainers</code> doesn't matter in this case.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesign",
              type: "sap.ui.layout.BackgroundDesign",
              optional: false,
              description:
                "New value for property <code>backgroundDesign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the <code>SimpleForm</code> content.\n\nThe visualization of the different options depends on the used theme.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Translucent</code>."
        },
        {
          name: "setBreakpointL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointL",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointL breakpointL}.\n\nBreakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1024</code>."
        },
        {
          name: "setBreakpointM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointM",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointM breakpointM}.\n\nBreakpoint between Small size and Medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>600</code>."
        },
        {
          name: "setBreakpointXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iBreakpointXL",
              type: "int",
              optional: false,
              description: "New value for property <code>breakpointXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBreakpointXL breakpointXL}.\n\nBreakpoint between Medium size and Large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1440</code>."
        },
        {
          name: "setColumnsL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsL",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsL columnsL}.\n\nForm columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setColumnsM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsM",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsM columnsM}.\n\nForm columns for medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setColumnsXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnsXL",
              type: "int",
              optional: false,
              description: "New value for property <code>columnsXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnsXL columnsXL}.\n\nForm columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setEditable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEditable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>editable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEditable editable}.\n\nApplies a device-specific and theme-specific line height and label alignment to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.\n\nThe labels inside the form will be rendered by default in the according mode.\n\n<b>Note:</b> The setting of this property does not change the content of the form. For example, <code>Input</code> controls in a form with <code>editable</code> set to false are still editable.\n\n<b>Warning:</b> If this property is wrongly set, this might lead to visual issues. The labels and fields might be misaligned, the labels might be rendered in the wrong mode, and the spacing between the single controls might be wrong. Also, controls that do not fit the mode might be rendered incorrectly.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setEmptySpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanL",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanL emptySpanL}.\n\nNumber of grid cells that are empty at the end of each line on large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> or a <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the empty cells for large columns.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanM",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanM emptySpanM}.\n\nNumber of grid cells that are empty at the end of each line on medium size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanS",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanS emptySpanS}.\n\nNumber of grid cells that are empty at the end of each line on small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setEmptySpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iEmptySpanXL",
              type: "int",
              optional: false,
              description: "New value for property <code>emptySpanXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEmptySpanXL emptySpanXL}.\n\nNumber of grid cells that are empty at the end of each line on extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setLabelMinWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelMinWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>labelMinWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelMinWidth labelMinWidth}.\n\nSpecifies the min-width in pixels of the label in all form rows.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>192</code>."
        },
        {
          name: "setLabelSpanL",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanL",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanL labelSpanL}.\n\nDefault span for labels in large size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.\n\n<b>Note:</b> This property is only used if <code>ResponsiveGridLayout</code> or <code>ColumnLayout</code> is used as a layout. If a <code>ColumnLayout</code> is used, this property defines the label size for large columns.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>4</code>."
        },
        {
          name: "setLabelSpanM",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanM",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanM labelSpanM}.\n\nDefault span for labels in medium size.\n\n<b>Note:</b> If <code>adjustLabelSpan</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setLabelSpanS",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanS",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanS labelSpanS}.\n\nDefault span for labels in small size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>12</code>."
        },
        {
          name: "setLabelSpanXL",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iLabelSpanXL",
              type: "int",
              optional: false,
              description: "New value for property <code>labelSpanXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLabelSpanXL labelSpanXL}.\n\nDefault span for labels in extra large size.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setLayout",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sLayout",
              type: "sap.ui.layout.form.SimpleFormLayout",
              optional: false,
              description: "New value for property <code>layout</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLayout layout}.\n\nThe <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.\n\nWe recommend using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.\n\n<b>Note</b> If possible, set the <code>layout</code> before adding content to prevent calculations for the default layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>ResponsiveLayout</code>."
        },
        {
          name: "setMaxContainerCols",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMaxContainerCols",
              type: "int",
              optional: false,
              description:
                "New value for property <code>maxContainerCols</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMaxContainerCols maxContainerCols}.\n\nThe maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.\n\n<b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a <code>layout</code>, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>2</code>."
        },
        {
          name: "setMinWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>minWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinWidth minWidth}.\n\nThe overall minimum width in pixels that is used for the <code>SimpleForm</code>.\n\nIf the available width is below the given <code>minWidth</code> the <code>SimpleForm</code> will create a new row for the next group (<code>FormContainer</code>). The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until <code>maxContainerCols</code> is reached, irrespective of whether a <code>width</code> is reached or the available parents width is reached.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setSingleContainerFullSize",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSingleContainerFullSize",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>singleContainerFullSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSingleContainerFullSize singleContainerFullSize}.\n\nIf the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set, the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>. In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.\n\nIn all other cases the <code>FormContainer</code> is displayed in the size of one column.\n\n<b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          since: "1.16.3",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTitle",
              type: "sap.ui.core.Title|string",
              optional: false,
              description: "The title to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitle title}."
        },
        {
          name: "setToolbar",
          visibility: "public",
          since: "1.36.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbar",
              type: "sap.ui.core.Toolbar",
              optional: false,
              description: "The toolbar to set"
            }
          ],
          description: "Sets the aggregated {@link #getToolbar toolbar}."
        },
        {
          name: "setWidth",
          visibility: "public",
          since: "1.28.0",
          returnValue: {
            type: "sap.ui.layout.form.SimpleForm",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the form.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.form.SimpleFormLayout",
      basename: "SimpleFormLayout",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "form.SimpleFormLayout",
      static: true,
      visibility: "public",
      since: "1.16.0",
      description:
        "Available <code>FormLayouts</code> used to render a <code>SimpleForm</code>.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "ColumnLayout",
          visibility: "public",
          static: true,
          since: "1.56.0",
          type: "string",
          description:
            "Uses the <code>ColumnLayout</code> layout to render the <code>SimpleForm</code> control"
        },
        {
          name: "GridLayout",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Uses the <code>GridLayout</code> layout to render the <code>SimpleForm</code> control"
        },
        {
          name: "ResponsiveGridLayout",
          visibility: "public",
          static: true,
          since: "1.16.0",
          type: "string",
          description:
            "Uses the <code>ResponsiveGridLayout</code> layout to render the <code>SimpleForm</code> control"
        },
        {
          name: "ResponsiveLayout",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Uses the <code>ResponsiveLayout</code> layout to render the <code>SimpleForm</code> control"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.Grid",
      basename: "Grid",
      resource: "sap/ui/layout/Grid.js",
      module: "sap/ui/layout/Grid",
      export: "",
      static: true,
      visibility: "public",
      since: "1.15.0",
      extends: "sap.ui.core.Control",
      description:
        "A layout control which positions its child controls in a 12 column flow layout.\n\nThe <code>Grid</code> control's children can be specified to take on a variable amount of columns depending on available screen size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-, large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile.\n\nThe <code>Grid</code> control's width can be percentage- or pixel-based and the spacing between its columns can be set to various predefined values.\n\n<b>Note:</b> The visibility of the child control does not affect the horizontal space it occupies. This means that even if the control is not visible, its horizontal space will still exist, even if it is empty.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Dimension",
            visibility: "public",
            description:
              "Optional. Defines the width of the <code>Grid</code>. If not specified, then 100%.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "vSpacing",
            type: "float",
            defaultValue: 1,
            group: "Dimension",
            visibility: "public",
            description:
              "Optional. Defines the vertical spacing between the rows in the <code>Grid</code>. In rem, allowed values are 0, 0.5, 1 and 2.",
            methods: ["getVSpacing", "setVSpacing"]
          },
          {
            name: "hSpacing",
            type: "float",
            defaultValue: 1,
            group: "Dimension",
            visibility: "public",
            description:
              "Optional. Defines the horizontal spacing between the content in the <code>Grid</code>. In rem, allowed values are 0, 0.5 , 1 or 2.",
            methods: ["getHSpacing", "setHSpacing"]
          },
          {
            name: "position",
            type: "sap.ui.layout.GridPosition",
            defaultValue: "Left",
            group: "Dimension",
            visibility: "public",
            description:
              "Optional. Defines the position of the <code>Grid</code> in the window or surrounding container.",
            methods: ["getPosition", "setPosition"]
          },
          {
            name: "defaultSpan",
            type: "sap.ui.layout.GridSpan",
            defaultValue: "XL3 L3 M6 S12",
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. A string type that represents the span values of the <code>Grid</code> for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
            methods: ["getDefaultSpan", "setDefaultSpan"]
          },
          {
            name: "defaultIndent",
            type: "sap.ui.layout.GridIndent",
            defaultValue: "XL0 L0 M0 S0",
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
            methods: ["getDefaultIndent", "setDefaultIndent"]
          },
          {
            name: "containerQuery",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "If set to <code>true</code>, the current range (large, medium or small) is defined by the size of the container surrounding the <code>Grid</code> instead of the device screen size (media Query).",
            methods: ["getContainerQuery", "setContainerQuery"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Controls that are placed into Grid layout.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.48.7",
            description:
              "Association to controls / IDs that label this control (see WAI-ARIA attribute <code>aria-labelledby</code>).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        designtime: "sap/ui/layout/designtime/Grid.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>Grid</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/grid-layout/#responsive-grid Grid}",
          "{@link topic:43ae317cf39640a88bc8be979d2671df Grid}",
          "{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}"
        ]
      },
      methods: [
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.Grid with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAccessibilityInfo",
          visibility: "protected",
          returnValue: {
            type: "object",
            description: "The <code>Grid</code> accessibility information"
          },
          description:
            "Returns the <code>Grid</code> accessibility information.",
          references: ["sap.ui.core.Control#getAccessibilityInfo"]
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getContainerQuery",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>containerQuery</code>"
          },
          description:
            "Gets current value of property {@link #getContainerQuery containerQuery}.\n\nIf set to <code>true</code>, the current range (large, medium or small) is defined by the size of the container surrounding the <code>Grid</code> instead of the device screen size (media Query).\n\nDefault value is <code>false</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nControls that are placed into Grid layout."
        },
        {
          name: "getDefaultIndent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridIndent",
            description: "Value of property <code>defaultIndent</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultIndent defaultIndent}.\n\nOptional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nDefault value is <code>XL0 L0 M0 S0</code>."
        },
        {
          name: "getDefaultSpan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridSpan",
            description: "Value of property <code>defaultSpan</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultSpan defaultSpan}.\n\nOptional. A string type that represents the span values of the <code>Grid</code> for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nDefault value is <code>XL3 L3 M6 S12</code>."
        },
        {
          name: "getHSpacing",
          visibility: "public",
          returnValue: {
            type: "float",
            description: "Value of property <code>hSpacing</code>"
          },
          description:
            "Gets current value of property {@link #getHSpacing hSpacing}.\n\nOptional. Defines the horizontal spacing between the content in the <code>Grid</code>. In rem, allowed values are 0, 0.5 , 1 or 2.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.layout.Grid."
        },
        {
          name: "getPosition",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridPosition",
            description: "Value of property <code>position</code>"
          },
          description:
            "Gets current value of property {@link #getPosition position}.\n\nOptional. Defines the position of the <code>Grid</code> in the window or surrounding container.\n\nDefault value is <code>Left</code>."
        },
        {
          name: "getVSpacing",
          visibility: "public",
          returnValue: {
            type: "float",
            description: "Value of property <code>vSpacing</code>"
          },
          description:
            "Gets current value of property {@link #getVSpacing vSpacing}.\n\nOptional. Defines the vertical spacing between the rows in the <code>Grid</code>. In rem, allowed values are 0, 0.5, 1 and 2.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nOptional. Defines the width of the <code>Grid</code>. If not specified, then 100%.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setContainerQuery",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bContainerQuery",
              type: "boolean",
              optional: false,
              description: "New value for property <code>containerQuery</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getContainerQuery containerQuery}.\n\nIf set to <code>true</code>, the current range (large, medium or small) is defined by the size of the container surrounding the <code>Grid</code> instead of the device screen size (media Query).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setDefaultIndent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultIndent",
              type: "sap.ui.layout.GridIndent",
              optional: false,
              description: "New value for property <code>defaultIndent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultIndent defaultIndent}.\n\nOptional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>XL0 L0 M0 S0</code>."
        },
        {
          name: "setDefaultSpan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultSpan",
              type: "sap.ui.layout.GridSpan",
              optional: false,
              description: "New value for property <code>defaultSpan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultSpan defaultSpan}.\n\nOptional. A string type that represents the span values of the <code>Grid</code> for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>XL3 L3 M6 S12</code>."
        },
        {
          name: "setHSpacing",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fHSpacing",
              type: "float",
              optional: false,
              description: "New value for property <code>hSpacing</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHSpacing hSpacing}.\n\nOptional. Defines the horizontal spacing between the content in the <code>Grid</code>. In rem, allowed values are 0, 0.5 , 1 or 2.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setPosition",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sPosition",
              type: "sap.ui.layout.GridPosition",
              optional: false,
              description: "New value for property <code>position</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPosition position}.\n\nOptional. Defines the position of the <code>Grid</code> in the window or surrounding container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Left</code>."
        },
        {
          name: "setVSpacing",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fVSpacing",
              type: "float",
              optional: false,
              description: "New value for property <code>vSpacing</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVSpacing vSpacing}.\n\nOptional. Defines the vertical spacing between the rows in the <code>Grid</code>. In rem, allowed values are 0, 0.5, 1 and 2.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Grid",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nOptional. Defines the width of the <code>Grid</code>. If not specified, then 100%.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.GridData",
      basename: "GridData",
      resource: "sap/ui/layout/GridData.js",
      module: "sap/ui/layout/GridData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.15.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "Defines layout data for the {@link sap.ui.layout.Grid}.\n\n<b>Note:</b> When <code>GridData</code> is used for controls inside a form, the <code>linebreak</code> property has to be set to <code>true</code> if the next form element has to be displayed on a new line. Otherwise the <code>GridData</code> overrides the layout provided by the <code>Form</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "span",
            type: "sap.ui.layout.GridSpan",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
            methods: ["getSpan", "setSpan"]
          },
          {
            name: "spanXL",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the <code>span</code> property.",
            methods: ["getSpanXL", "setSpanXL"]
          },
          {
            name: "spanL",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.",
            methods: ["getSpanL", "setSpanL"]
          },
          {
            name: "spanM",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the <code>span</code> property.",
            methods: ["getSpanM", "setSpanM"]
          },
          {
            name: "spanS",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.",
            methods: ["getSpanS", "setSpanS"]
          },
          {
            name: "indent",
            type: "sap.ui.layout.GridIndent",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
            methods: ["getIndent", "setIndent"]
          },
          {
            name: "indentXL",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines an indent value for extra large screens. This value overwrites the value for extra large screens defined in the <code>indent</code> property.",
            methods: ["getIndentXL", "setIndentXL"]
          },
          {
            name: "indentL",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.",
            methods: ["getIndentL", "setIndentL"]
          },
          {
            name: "indentM",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines an indent value for medium size screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.",
            methods: ["getIndentM", "setIndentM"]
          },
          {
            name: "indentS",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Optional. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.",
            methods: ["getIndentS", "setIndentS"]
          },
          {
            name: "visibleXL",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Defines if this control is visible on extra Large screens.",
            methods: ["getVisibleXL", "setVisibleXL"]
          },
          {
            name: "visibleL",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description: "Defines if this control is visible on large screens.",
            methods: ["getVisibleL", "setVisibleL"]
          },
          {
            name: "visibleM",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Defines if this control is visible on medium screens.",
            methods: ["getVisibleM", "setVisibleM"]
          },
          {
            name: "visibleS",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description: "Defines if this control is visible on small screens.",
            methods: ["getVisibleS", "setVisibleS"]
          },
          {
            name: "moveBackwards",
            type: "sap.ui.layout.GridIndent",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. Moves a cell backwards with as many columns as specified.",
            methods: ["getMoveBackwards", "setMoveBackwards"]
          },
          {
            name: "moveForward",
            type: "sap.ui.layout.GridIndent",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. Moves a cell forwards with as many columns as specified.",
            methods: ["getMoveForward", "setMoveForward"]
          },
          {
            name: "linebreak",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. If set to <code>true</code>, the control causes a line break on all-size screens within the <code>Grid</code> and becomes the first within the next line.",
            methods: ["getLinebreak", "setLinebreak"]
          },
          {
            name: "linebreakXL",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. If set to <code>true</code>, the control causes a line break on extra large screens within the <code>Grid</code> and becomes the first within the next line.",
            methods: ["getLinebreakXL", "setLinebreakXL"]
          },
          {
            name: "linebreakL",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. If set to <code>true</code>, the control causes a line break on large screens within the <code>Grid</code> and becomes the first within the next line.",
            methods: ["getLinebreakL", "setLinebreakL"]
          },
          {
            name: "linebreakM",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. If set to <code>true</code>, the control causes a line break on medium screens within the <code>Grid</code> and becomes the first within the next line.",
            methods: ["getLinebreakM", "setLinebreakM"]
          },
          {
            name: "linebreakS",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Optional. If set to <code>true</code>, the control causes a line break on small screens within the <code>Grid</code> and becomes the first within the next line.",
            methods: ["getLinebreakS", "setLinebreakS"]
          },
          {
            name: "spanLarge",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>spanL</code> property instead."
            },
            methods: ["getSpanLarge", "setSpanLarge"]
          },
          {
            name: "spanMedium",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines a span value for medium screens. This value overwrites the value for medium screens defined in the <code>span</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>spanM</code> property instead."
            },
            methods: ["getSpanMedium", "setSpanMedium"]
          },
          {
            name: "spanSmall",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>spanS</code> property instead."
            },
            methods: ["getSpanSmall", "setSpanSmall"]
          },
          {
            name: "indentLarge",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>indentL</code> property instead."
            },
            methods: ["getIndentLarge", "setIndentLarge"]
          },
          {
            name: "indentMedium",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>indentM</code> property instead."
            },
            methods: ["getIndentMedium", "setIndentMedium"]
          },
          {
            name: "indentSmall",
            type: "int",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.",
            deprecated: {
              since: "1.17.1",
              text: "Use <code>indentS</code> property instead."
            },
            methods: ["getIndentSmall", "setIndentSmall"]
          },
          {
            name: "visibleOnLarge",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines if this control is visible on large screens.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>visibleL</code> property instead."
            },
            methods: ["getVisibleOnLarge", "setVisibleOnLarge"]
          },
          {
            name: "visibleOnMedium",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines if this control is visible on medium screens.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>visibleM</code> property instead."
            },
            methods: ["getVisibleOnMedium", "setVisibleOnMedium"]
          },
          {
            name: "visibleOnSmall",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Deprecated. Defines if this control is visible on small screens.",
            deprecated: {
              since: "1.17.1",
              text: "Use the <code>visibleS</code> property instead."
            },
            methods: ["getVisibleOnSmall", "setVisibleOnSmall"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>GridData</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:43ae317cf39640a88bc8be979d2671df Grid}",
          "{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}"
        ]
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.GridData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getIndent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridIndent",
            description: "Value of property <code>indent</code>"
          },
          description:
            "Gets current value of property {@link #getIndent indent}.\n\nA string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>."
        },
        {
          name: "getIndentL",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentL</code>"
          },
          description:
            "Gets current value of property {@link #getIndentL indentL}.\n\nOptional. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property."
        },
        {
          name: "getIndentLarge",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentLarge</code>"
          },
          description:
            "Gets current value of property {@link #getIndentLarge indentLarge}.\n\nDeprecated. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>indentL</code> property instead."
          }
        },
        {
          name: "getIndentM",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentM</code>"
          },
          description:
            "Gets current value of property {@link #getIndentM indentM}.\n\nOptional. Defines an indent value for medium size screens. This value overwrites the value for medium screens defined in the <code>indent</code> property."
        },
        {
          name: "getIndentMedium",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentMedium</code>"
          },
          description:
            "Gets current value of property {@link #getIndentMedium indentMedium}.\n\nDeprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>indentM</code> property instead."
          }
        },
        {
          name: "getIndentS",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentS</code>"
          },
          description:
            "Gets current value of property {@link #getIndentS indentS}.\n\nOptional. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property."
        },
        {
          name: "getIndentSmall",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentSmall</code>"
          },
          description:
            "Gets current value of property {@link #getIndentSmall indentSmall}.\n\nDeprecated. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use <code>indentS</code> property instead."
          }
        },
        {
          name: "getIndentXL",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>indentXL</code>"
          },
          description:
            "Gets current value of property {@link #getIndentXL indentXL}.\n\nOptional. Defines an indent value for extra large screens. This value overwrites the value for extra large screens defined in the <code>indent</code> property."
        },
        {
          name: "getLinebreak",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreak</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreak linebreak}.\n\nOptional. If set to <code>true</code>, the control causes a line break on all-size screens within the <code>Grid</code> and becomes the first within the next line.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLinebreakL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreakL</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreakL linebreakL}.\n\nOptional. If set to <code>true</code>, the control causes a line break on large screens within the <code>Grid</code> and becomes the first within the next line.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLinebreakM",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreakM</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreakM linebreakM}.\n\nOptional. If set to <code>true</code>, the control causes a line break on medium screens within the <code>Grid</code> and becomes the first within the next line.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLinebreakS",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreakS</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreakS linebreakS}.\n\nOptional. If set to <code>true</code>, the control causes a line break on small screens within the <code>Grid</code> and becomes the first within the next line.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLinebreakXL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreakXL</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreakXL linebreakXL}.\n\nOptional. If set to <code>true</code>, the control causes a line break on extra large screens within the <code>Grid</code> and becomes the first within the next line.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.GridData."
        },
        {
          name: "getMoveBackwards",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridIndent",
            description: "Value of property <code>moveBackwards</code>"
          },
          description:
            "Gets current value of property {@link #getMoveBackwards moveBackwards}.\n\nOptional. Moves a cell backwards with as many columns as specified."
        },
        {
          name: "getMoveForward",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridIndent",
            description: "Value of property <code>moveForward</code>"
          },
          description:
            "Gets current value of property {@link #getMoveForward moveForward}.\n\nOptional. Moves a cell forwards with as many columns as specified."
        },
        {
          name: "getSpan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridSpan",
            description: "Value of property <code>span</code>"
          },
          description:
            "Gets current value of property {@link #getSpan span}.\n\nA string type that represents the span values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>."
        },
        {
          name: "getSpanL",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanL</code>"
          },
          description:
            "Gets current value of property {@link #getSpanL spanL}.\n\nOptional. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property."
        },
        {
          name: "getSpanLarge",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanLarge</code>"
          },
          description:
            "Gets current value of property {@link #getSpanLarge spanLarge}.\n\nDeprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanL</code> property instead."
          }
        },
        {
          name: "getSpanM",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanM</code>"
          },
          description:
            "Gets current value of property {@link #getSpanM spanM}.\n\nOptional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the <code>span</code> property."
        },
        {
          name: "getSpanMedium",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanMedium</code>"
          },
          description:
            "Gets current value of property {@link #getSpanMedium spanMedium}.\n\nDeprecated. Defines a span value for medium screens. This value overwrites the value for medium screens defined in the <code>span</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanM</code> property instead."
          }
        },
        {
          name: "getSpanS",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanS</code>"
          },
          description:
            "Gets current value of property {@link #getSpanS spanS}.\n\nOptional. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property."
        },
        {
          name: "getSpanSmall",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanSmall</code>"
          },
          description:
            "Gets current value of property {@link #getSpanSmall spanSmall}.\n\nDeprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanS</code> property instead."
          }
        },
        {
          name: "getSpanXL",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>spanXL</code>"
          },
          description:
            "Gets current value of property {@link #getSpanXL spanXL}.\n\nOptional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the <code>span</code> property."
        },
        {
          name: "getVisibleL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleL</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleL visibleL}.\n\nDefines if this control is visible on large screens.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleM",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleM</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleM visibleM}.\n\nDefines if this control is visible on medium screens.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleOnLarge",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleOnLarge</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleOnLarge visibleOnLarge}.\n\nDeprecated. Defines if this control is visible on large screens.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleL</code> property instead."
          }
        },
        {
          name: "getVisibleOnMedium",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleOnMedium</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleOnMedium visibleOnMedium}.\n\nDeprecated. Defines if this control is visible on medium screens.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleM</code> property instead."
          }
        },
        {
          name: "getVisibleOnSmall",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleOnSmall</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleOnSmall visibleOnSmall}.\n\nDeprecated. Defines if this control is visible on small screens.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleS</code> property instead."
          }
        },
        {
          name: "getVisibleS",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleS</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleS visibleS}.\n\nDefines if this control is visible on small screens.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleXL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleXL</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleXL visibleXL}.\n\nDefines if this control is visible on extra Large screens.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIndent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIndent",
              type: "sap.ui.layout.GridIndent",
              optional: false,
              description: "New value for property <code>indent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndent indent}.\n\nA string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example, <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIndentL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentL",
              type: "int",
              optional: false,
              description: "New value for property <code>indentL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentL indentL}.\n\nOptional. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIndentLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentLarge",
              type: "int",
              optional: false,
              description: "New value for property <code>indentLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentLarge indentLarge}.\n\nDeprecated. Defines an indent value for large screens. This value overwrites the value for large screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>indentL</code> property instead."
          }
        },
        {
          name: "setIndentM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentM",
              type: "int",
              optional: false,
              description: "New value for property <code>indentM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentM indentM}.\n\nOptional. Defines an indent value for medium size screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIndentMedium",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentMedium",
              type: "int",
              optional: false,
              description: "New value for property <code>indentMedium</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentMedium indentMedium}.\n\nDeprecated. Defines an indent value for medium screens. This value overwrites the value for medium screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>indentM</code> property instead."
          }
        },
        {
          name: "setIndentS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentS",
              type: "int",
              optional: false,
              description: "New value for property <code>indentS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentS indentS}.\n\nOptional. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setIndentSmall",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentSmall",
              type: "int",
              optional: false,
              description: "New value for property <code>indentSmall</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentSmall indentSmall}.\n\nDeprecated. Defines an indent value for small screens. This value overwrites the value for small screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use <code>indentS</code> property instead."
          }
        },
        {
          name: "setIndentXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndentXL",
              type: "int",
              optional: false,
              description: "New value for property <code>indentXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIndentXL indentXL}.\n\nOptional. Defines an indent value for extra large screens. This value overwrites the value for extra large screens defined in the <code>indent</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setLinebreak",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreak",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreak</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreak linebreak}.\n\nOptional. If set to <code>true</code>, the control causes a line break on all-size screens within the <code>Grid</code> and becomes the first within the next line.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLinebreakL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreakL",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreakL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreakL linebreakL}.\n\nOptional. If set to <code>true</code>, the control causes a line break on large screens within the <code>Grid</code> and becomes the first within the next line.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLinebreakM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreakM",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreakM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreakM linebreakM}.\n\nOptional. If set to <code>true</code>, the control causes a line break on medium screens within the <code>Grid</code> and becomes the first within the next line.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLinebreakS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreakS",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreakS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreakS linebreakS}.\n\nOptional. If set to <code>true</code>, the control causes a line break on small screens within the <code>Grid</code> and becomes the first within the next line.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLinebreakXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreakXL",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreakXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreakXL linebreakXL}.\n\nOptional. If set to <code>true</code>, the control causes a line break on extra large screens within the <code>Grid</code> and becomes the first within the next line.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMoveBackwards",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sMoveBackwards",
              type: "sap.ui.layout.GridIndent",
              optional: false,
              description: "New value for property <code>moveBackwards</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMoveBackwards moveBackwards}.\n\nOptional. Moves a cell backwards with as many columns as specified.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setMoveForward",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sMoveForward",
              type: "sap.ui.layout.GridIndent",
              optional: false,
              description: "New value for property <code>moveForward</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMoveForward moveForward}.\n\nOptional. Moves a cell forwards with as many columns as specified.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSpan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSpan",
              type: "sap.ui.layout.GridSpan",
              optional: false,
              description: "New value for property <code>span</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpan span}.\n\nA string type that represents the span values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSpanL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanL",
              type: "int",
              optional: false,
              description: "New value for property <code>spanL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanL spanL}.\n\nOptional. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSpanLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanLarge",
              type: "int",
              optional: false,
              description: "New value for property <code>spanLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanLarge spanLarge}.\n\nDeprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanL</code> property instead."
          }
        },
        {
          name: "setSpanM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanM",
              type: "int",
              optional: false,
              description: "New value for property <code>spanM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanM spanM}.\n\nOptional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSpanMedium",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanMedium",
              type: "int",
              optional: false,
              description: "New value for property <code>spanMedium</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanMedium spanMedium}.\n\nDeprecated. Defines a span value for medium screens. This value overwrites the value for medium screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanM</code> property instead."
          }
        },
        {
          name: "setSpanS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanS",
              type: "int",
              optional: false,
              description: "New value for property <code>spanS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanS spanS}.\n\nOptional. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSpanSmall",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanSmall",
              type: "int",
              optional: false,
              description: "New value for property <code>spanSmall</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanSmall spanSmall}.\n\nDeprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>spanS</code> property instead."
          }
        },
        {
          name: "setSpanXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSpanXL",
              type: "int",
              optional: false,
              description: "New value for property <code>spanXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSpanXL spanXL}.\n\nOptional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the <code>span</code> property.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setVisibleL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleL",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleL visibleL}.\n\nDefines if this control is visible on large screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleM",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleM",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleM visibleM}.\n\nDefines if this control is visible on medium screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleOnLarge",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleOnLarge",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleOnLarge</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleOnLarge visibleOnLarge}.\n\nDeprecated. Defines if this control is visible on large screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleL</code> property instead."
          }
        },
        {
          name: "setVisibleOnMedium",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleOnMedium",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleOnMedium</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleOnMedium visibleOnMedium}.\n\nDeprecated. Defines if this control is visible on medium screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleM</code> property instead."
          }
        },
        {
          name: "setVisibleOnSmall",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleOnSmall",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleOnSmall</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleOnSmall visibleOnSmall}.\n\nDeprecated. Defines if this control is visible on small screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.",
          deprecated: {
            since: "1.17.1",
            text: "Use the <code>visibleS</code> property instead."
          }
        },
        {
          name: "setVisibleS",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleS",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleS visibleS}.\n\nDefines if this control is visible on small screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleXL",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.GridData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleXL",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleXL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleXL visibleXL}.\n\nDefines if this control is visible on extra Large screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.GridIndent",
      basename: "GridIndent",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "GridIndent",
      final: true,
      static: true,
      visibility: "public",
      description:
        "A string type that represents the indent values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M11</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "string",
        pattern:
          "^(([Xx][Ll](?:[0-9]|1[0-1]))? ?([Ll](?:[0-9]|1[0-1]))? ?([Mm](?:[0-9]|1[0-1]))? ?([Ss](?:[0-9]|1[0-1]))?)$"
      }
    },
    {
      kind: "enum",
      name: "sap.ui.layout.GridPosition",
      basename: "GridPosition",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "GridPosition",
      static: true,
      visibility: "public",
      description:
        "The position of the {@link sap.ui.layout.Grid}. Can be <code>Left</code> (default), <code>Center</code> or <code>Right</code>.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Center",
          visibility: "public",
          static: true,
          type: "string",
          description: "<code>Grid</code> is centered on the screen."
        },
        {
          name: "Left",
          visibility: "public",
          static: true,
          type: "string",
          description: "<code>Grid</code> is aligned left."
        },
        {
          name: "Right",
          visibility: "public",
          static: true,
          type: "string",
          description: "<code>Grid</code> is aligned to the right."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.ui.layout.GridSpan",
      basename: "GridSpan",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "GridSpan",
      final: true,
      static: true,
      visibility: "public",
      description:
        "A string type that represents the span values of the <code>Grid</code> for large, medium and small screens.\n\nAllowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: <code>L2 M4 S6</code>, <code>M12</code>, <code>s10</code> or <code>l4 m4</code>.\n\n<b>Note:</b> The parameters must be provided in the order <large medium small>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "string",
        pattern:
          "^(([Xx][Ll](?:[1-9]|1[0-2]))? ?([Ll](?:[1-9]|1[0-2]))? ?([Mm](?:[1-9]|1[0-2]))? ?([Ss](?:[1-9]|1[0-2]))?)$"
      }
    },
    {
      kind: "class",
      name: "sap.ui.layout.HorizontalLayout",
      basename: "HorizontalLayout",
      resource: "sap/ui/layout/HorizontalLayout.js",
      module: "sap/ui/layout/HorizontalLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "A layout that provides support for horizontal alignment of controls",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "allowWrapping",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.",
            methods: ["getAllowWrapping", "setAllowWrapping"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The controls inside this layout",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/ui/layout/designtime/HorizontalLayout.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new HorizontalLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.HorizontalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.HorizontalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.HorizontalLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAccessibilityInfo",
          visibility: "protected",
          returnValue: {
            type: "object",
            description: "Current accessibility state of the control"
          },
          references: ["sap.ui.core.Control#getAccessibilityInfo"]
        },
        {
          name: "getAllowWrapping",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>allowWrapping</code>"
          },
          description:
            "Gets current value of property {@link #getAllowWrapping allowWrapping}.\n\nSpecifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe controls inside this layout"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.HorizontalLayout."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.HorizontalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setAllowWrapping",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.HorizontalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAllowWrapping",
              type: "boolean",
              optional: false,
              description: "New value for property <code>allowWrapping</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAllowWrapping allowWrapping}.\n\nSpecifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.PaneContainer",
      basename: "PaneContainer",
      resource: "sap/ui/layout/PaneContainer.js",
      module: "sap/ui/layout/PaneContainer",
      export: "",
      static: true,
      visibility: "public",
      since: "1.38",
      extends: "sap.ui.core.Element",
      description:
        "PaneContainer is an abstraction of Splitter.\n\nCould be used as an aggregation of ResponsiveSplitter or other PaneContainers.",
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "orientation",
            type: "sap.ui.core.Orientation",
            defaultValue: "Horizontal",
            group: "Behavior",
            visibility: "public",
            description: "The orientation of the Splitter",
            methods: ["getOrientation", "setOrientation"]
          }
        ],
        aggregations: [
          {
            name: "panes",
            singularName: "pane",
            type: "sap.ui.core.Element",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.",
            methods: [
              "getPanes",
              "destroyPanes",
              "insertPane",
              "addPane",
              "removePane",
              "indexOfPane",
              "removeAllPanes"
            ]
          }
        ],
        defaultAggregation: "panes"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new PaneContainer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addPane",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.PaneContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPane",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The pane to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some pane to the aggregation {@link #getPanes panes}."
        },
        {
          name: "destroyPanes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.PaneContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the panes in the aggregation {@link #getPanes panes}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.PaneContainer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.PaneContainer."
        },
        {
          name: "getOrientation",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Orientation",
            description: "Value of property <code>orientation</code>"
          },
          description:
            "Gets current value of property {@link #getOrientation orientation}.\n\nThe orientation of the Splitter\n\nDefault value is <code>Horizontal</code>."
        },
        {
          name: "getPanes",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Element[]" },
          description:
            "Gets content of aggregation {@link #getPanes panes}.\n\nThe Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width."
        },
        {
          name: "indexOfPane",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oPane",
              type: "sap.ui.core.Element",
              optional: false,
              description: "The pane whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Element</code> in the aggregation {@link #getPanes panes}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertPane",
          visibility: "public",
          returnValue: { type: "sap.ui.base.ManagedObject" },
          parameters: [
            { name: "oObject", type: "undefined", optional: false },
            { name: "iIndex", type: "undefined", optional: false }
          ],
          description: "Pane insertion"
        },
        {
          name: "removeAllPanes",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Element[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getPanes panes}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removePane",
          visibility: "public",
          returnValue: { type: "sap.ui.base.ManagedObject" },
          parameters: [{ name: "oObject", type: "undefined", optional: false }],
          description: "Pane removal"
        },
        {
          name: "setLayoutData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.PaneContainer",
            description: "this to allow method chaining."
          },
          parameters: [
            {
              name: "oLayoutData",
              type: "sap.ui.core.LayoutData",
              optional: false,
              description: "The LayoutData object."
            }
          ],
          description: "Setter for property layoutData."
        },
        {
          name: "setOrientation",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.PaneContainer",
            description: "this to allow method chaining."
          },
          parameters: [
            {
              name: "sOrientation",
              type: "sap.ui.core.Orientation",
              optional: false,
              description: "The Orientation type."
            }
          ],
          description:
            "Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.ResponsiveFlowLayout",
      basename: "ResponsiveFlowLayout",
      resource: "sap/ui/layout/ResponsiveFlowLayout.js",
      module: "sap/ui/layout/ResponsiveFlowLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "This is a layout where several controls can be added. These controls are blown up to fit in an entire row. If the window resizes, the controls are moved between the rows and resized again.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "responsive",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.",
            methods: ["getResponsive", "setResponsive"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        associations: [
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.48.7",
            description:
              "Association to controls / IDs that label this control (see WAI-ARIA attribute <code>aria-labelledby</code>).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ResponsiveFlowLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addContent",
          visibility: "public",
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content that should be added to the layout"
            }
          ],
          description:
            "Adds content. This function needs to be overridden to prevent any rendering while some content is still being added."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nAdded content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout."
        },
        {
          name: "getResponsive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>responsive</code>"
          },
          description:
            "Gets current value of property {@link #getResponsive responsive}.\n\nIf set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content that should be inserted to the layout"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "The index where the content should be inserted into"
            }
          ],
          description:
            "Inserts content. This function needs to be overridden to prevent any rendering while some content is still being added."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          since: "1.48.7",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeContent",
          visibility: "public",
          parameters: [
            {
              name: "oContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content that should be removed from the layout"
            }
          ],
          description:
            "Removes content. This function needs to be overridden to prevent any rendering while some content is still being added."
        },
        {
          name: "setResponsive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResponsive",
              type: "boolean",
              optional: false,
              description: "New value for property <code>responsive</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResponsive responsive}.\n\nIf set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.ResponsiveFlowLayoutData",
      basename: "ResponsiveFlowLayoutData",
      resource: "sap/ui/layout/ResponsiveFlowLayoutData.js",
      module: "sap/ui/layout/ResponsiveFlowLayoutData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.LayoutData",
      description:
        "This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "minWidth",
            type: "int",
            defaultValue: 100,
            group: "Misc",
            visibility: "public",
            description:
              "Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.",
            methods: ["getMinWidth", "setMinWidth"]
          },
          {
            name: "weight",
            type: "int",
            defaultValue: 1,
            group: "Misc",
            visibility: "public",
            description:
              "Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.",
            methods: ["getWeight", "setWeight"]
          },
          {
            name: "linebreak",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.",
            methods: ["getLinebreak", "setLinebreak"]
          },
          {
            name: "margin",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Prevents any margin of the element if set to false.",
            methods: ["getMargin", "setMargin"]
          },
          {
            name: "linebreakable",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.",
            methods: ["getLinebreakable", "setLinebreakable"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ResponsiveFlowLayoutData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getLinebreak",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreak</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreak linebreak}.\n\nIf this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLinebreakable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>linebreakable</code>"
          },
          description:
            "Gets current value of property {@link #getLinebreakable linebreakable}.\n\nShows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMargin",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>margin</code>"
          },
          description:
            "Gets current value of property {@link #getMargin margin}.\n\nPrevents any margin of the element if set to false.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData."
        },
        {
          name: "getMinWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>minWidth</code>"
          },
          description:
            "Gets current value of property {@link #getMinWidth minWidth}.\n\nDefines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.\n\nDefault value is <code>100</code>."
        },
        {
          name: "getWeight",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>weight</code>"
          },
          description:
            "Gets current value of property {@link #getWeight weight}.\n\nDefines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setLinebreak",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreak",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreak</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreak linebreak}.\n\nIf this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLinebreakable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLinebreakable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>linebreakable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLinebreakable linebreakable}.\n\nShows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setMargin",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMargin",
              type: "boolean",
              optional: false,
              description: "New value for property <code>margin</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMargin margin}.\n\nPrevents any margin of the element if set to false.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setMinWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>minWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinWidth minWidth}.\n\nDefines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100</code>."
        },
        {
          name: "setWeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveFlowLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iWeight",
              type: "int",
              optional: false,
              description: "New value for property <code>weight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWeight weight}.\n\nDefines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.ResponsiveSplitter",
      basename: "ResponsiveSplitter",
      resource: "sap/ui/layout/ResponsiveSplitter.js",
      module: "sap/ui/layout/ResponsiveSplitter",
      export: "",
      static: true,
      visibility: "public",
      since: "1.38",
      extends: "sap.ui.core.Control",
      description:
        "A responsive splitter which divides the application into several areas. <h3>Overview</h3> The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed across one or multiple screen areas, some of which may also be off-canvas.\n\nThe control is intended for developing administrative tools and applications. <h3>Structure</h3> The responsive splitter holds the following hierarchy of containers and controls: <ul> <li>{@link sap.ui.layout.PaneContainer Pane Container} - holds one or more Split Panes and determines the pane orientation. The pane which is stored in <code>rootPaneContainer</code> holds all other pane containers and split panes.</li> <li>{@link sap.ui.layout.SplitPane Split Pane} - independent containers that may interact with one another. Each pane can hold only one control.</li> </ul> <h3>Usage</h3> <h4>When to use</h4> <ul> <li>The application has to display several areas side by side that must be resizable.</li> <li>The application must work on a range of different devices in a responsive manner.</li> </ul> <h3>Responsive Behavior</h3> <ul> <li>As soon as views are in the off-canvas mode, the pagination bar at the bottom of the application allows the user to switch between them.</li> <li>On touch-enabled devices, the splitters show explicit handles with larger touch areas.</li> <li>Double-clicking on a splitter will collapse or expand it back to its original position.</li> </ul>\n\n<b>Note:</b> We don't recommend dynamically inserting/removing panes into/from the PaneContainer since this might lead to inconsistent layout. If it is necessary, you need to ensure the sum of all sizes of the SplitPanes doesn't exceed the width of the PaneContainer.",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Appearance",
            visibility: "public",
            description: "The width of the control",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Appearance",
            visibility: "public",
            description: "The height of the control",
            methods: ["getHeight", "setHeight"]
          }
        ],
        aggregations: [
          {
            name: "rootPaneContainer",
            singularName: "rootPaneContainer",
            type: "sap.ui.layout.PaneContainer",
            cardinality: "0..1",
            visibility: "public",
            description: "The root PaneContainer of the ResponsiveSplitter",
            methods: [
              "getRootPaneContainer",
              "destroyRootPaneContainer",
              "setRootPaneContainer"
            ]
          },
          {
            name: "_pages",
            singularName: "_page",
            type: "sap.ui.layout.ResponsiveSplitterPage",
            cardinality: "0..n",
            visibility: "hidden",
            description:
              "Contains the internal pages that are used for pagination",
            methods: [
              "get_pages",
              "destroy_pages",
              "insert_page",
              "add_page",
              "remove_page",
              "indexOf_page",
              "removeAll_pages"
            ]
          }
        ],
        defaultAggregation: "rootPaneContainer",
        associations: [
          {
            name: "defaultPane",
            singularName: "defaultPane",
            type: "sap.ui.layout.SplitPane",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The default pane that will remain always visible If no defaultPane is specified, the ResponsiveSplitter sets the first SplitPane that is added to a PaneContainer in it as a default.",
            methods: ["getDefaultPane", "setDefaultPane"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ResponsiveSplitter.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/responsive-splitter/ Responsive Splitter}"
        ]
      },
      methods: [
        {
          name: "destroyRootPaneContainer",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveSplitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the rootPaneContainer in the aggregation {@link #getRootPaneContainer rootPaneContainer}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.ResponsiveSplitter with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getDefaultPane",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getDefaultPane defaultPane}, or <code>null</code>."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nThe height of the control\n\nDefault value is <code>100%</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.ResponsiveSplitter."
        },
        {
          name: "getRootPaneContainer",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.PaneContainer" },
          description:
            "Gets content of aggregation {@link #getRootPaneContainer rootPaneContainer}.\n\nThe root PaneContainer of the ResponsiveSplitter"
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nThe width of the control\n\nDefault value is <code>100%</code>."
        },
        {
          name: "setDefaultPane",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveSplitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oDefaultPane",
              type: "sap.ui.core.ID|sap.ui.layout.SplitPane",
              optional: false,
              description:
                "ID of an element which becomes the new target of this defaultPane association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getDefaultPane defaultPane}."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveSplitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nThe height of the control\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "setRootPaneContainer",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveSplitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oRootPaneContainer",
              type: "sap.ui.layout.PaneContainer",
              optional: false,
              description: "The rootPaneContainer to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getRootPaneContainer rootPaneContainer}."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.ResponsiveSplitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nThe width of the control\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.SideContentFallDown",
      basename: "SideContentFallDown",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "SideContentFallDown",
      static: true,
      visibility: "public",
      since: "1.30",
      description: "Types of the DynamicSideContent FallDown options",
      "ui5-metamodel": true,
      properties: [
        {
          name: "BelowL",
          visibility: "public",
          static: true,
          type: "string",
          description: "Side content falls down on breakpoints below L"
        },
        {
          name: "BelowM",
          visibility: "public",
          static: true,
          type: "string",
          description: "Side content falls down on breakpoints below M"
        },
        {
          name: "BelowXL",
          visibility: "public",
          static: true,
          type: "string",
          description: "Side content falls down on breakpoints below XL"
        },
        {
          name: "OnMinimumWidth",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Side content falls down on breakpoint M and the minimum width for the side content"
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.SideContentPosition",
      basename: "SideContentPosition",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "SideContentPosition",
      static: true,
      visibility: "public",
      description:
        "The position of the side content - End (default) and Begin.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Begin",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The side content is on the left side of the main container in left-to-right mode and on the right side in right-to-left mode."
        },
        {
          name: "End",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The side content is on the right side of the main container in left-to-right mode and on the left side in right-to-left mode."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.layout.SideContentVisibility",
      basename: "SideContentVisibility",
      resource: "sap/ui/layout/library.js",
      module: "sap/ui/layout/library",
      export: "SideContentVisibility",
      static: true,
      visibility: "public",
      since: "1.30",
      description: "Types of the DynamicSideContent Visibility options",
      "ui5-metamodel": true,
      properties: [
        {
          name: "AlwaysShow",
          visibility: "public",
          static: true,
          type: "string",
          description: "Show the side content on any breakpoint"
        },
        {
          name: "NeverShow",
          visibility: "public",
          static: true,
          type: "string",
          description: "Don't show the side content on any breakpoints"
        },
        {
          name: "ShowAboveL",
          visibility: "public",
          static: true,
          type: "string",
          description: "Show the side content on XL breakpoint"
        },
        {
          name: "ShowAboveM",
          visibility: "public",
          static: true,
          type: "string",
          description: "Show the side content on L and XL breakpoints"
        },
        {
          name: "ShowAboveS",
          visibility: "public",
          static: true,
          type: "string",
          description: "Show the side content on M, L and XL breakpoints"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.SplitPane",
      basename: "SplitPane",
      resource: "sap/ui/layout/SplitPane.js",
      module: "sap/ui/layout/SplitPane",
      export: "",
      static: true,
      visibility: "public",
      since: "1.38",
      extends: "sap.ui.core.Element",
      description:
        "SplitPane is a container of a single control in a responsive splitter. Could be used as an aggregation of a {@link sap.ui.layout.PaneContainer PaneContainer}.\n\nThe behavior of the Split Panes is handled by the following properties: <ul> <li><code>requiredParentWidth</code> - determines the minimum width of the parent container (in pixels). When it is reached, the pane will be hidden from the screen.</li> <li><code>demandPane</code> - determines if the pane is reachable via the pagination bar after it has been hidden from the screen.</li> </ul",
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "demandPane",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the pane will be moved to the pagination",
            methods: ["getDemandPane", "setDemandPane"]
          },
          {
            name: "requiredParentWidth",
            type: "int",
            defaultValue: 800,
            group: "Misc",
            visibility: "public",
            description:
              "Determines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.",
            methods: ["getRequiredParentWidth", "setRequiredParentWidth"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description: "Content of the SplitPane",
            methods: ["getContent", "destroyContent", "setContent"]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new SplitPane.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitPane",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.SplitPane with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nContent of the SplitPane"
        },
        {
          name: "getDemandPane",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>demandPane</code>"
          },
          description:
            "Gets current value of property {@link #getDemandPane demandPane}.\n\nDetermines whether the pane will be moved to the pagination\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.SplitPane."
        },
        {
          name: "getRequiredParentWidth",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>requiredParentWidth</code>"
          },
          description:
            "Gets current value of property {@link #getRequiredParentWidth requiredParentWidth}.\n\nDetermines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.\n\nDefault value is <code>800</code>."
        },
        {
          name: "setContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitPane",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to set"
            }
          ],
          description: "Sets the aggregated {@link #getContent content}."
        },
        {
          name: "setDemandPane",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitPane",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDemandPane",
              type: "boolean",
              optional: false,
              description: "New value for property <code>demandPane</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDemandPane demandPane}.\n\nDetermines whether the pane will be moved to the pagination\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setRequiredParentWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitPane",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iRequiredParentWidth",
              type: "int",
              optional: false,
              description:
                "New value for property <code>requiredParentWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRequiredParentWidth requiredParentWidth}.\n\nDetermines the minimum width of the ResponsiveSplitter(in pixels). When it is reached the pane will be hidden from the screen.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>800</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.Splitter",
      basename: "Splitter",
      resource: "sap/ui/layout/Splitter.js",
      module: "sap/ui/layout/Splitter",
      export: "",
      static: true,
      visibility: "public",
      since: "1.22.0",
      extends: "sap.ui.core.Control",
      description:
        "A layout that contains several content areas. The content that is added to the splitter should contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.\n\nBy adding or changing SplitterLayoutData to the controls that make up the content areas, the size can be changed programatically. Additionally the contents can be made non-resizable individually and a minimal size (in px) can be set.\n\nThe orientation of the splitter can be set to horizontal (default) or vertical. All content areas of the splitter will be arranged in that way. In order to split vertically and horizontally at the same time, Splitters need to be nested.\n\nThe splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an auto-size content-area next to another auto-size one might lead to the effect that the former does not take its maximum size but only the maximum size before recalculating auto sizes).\n\nThe splitter bars used for resizing the contents by the user can be set to different widths (or heights in vertical mode) and the splitter will automatically resize the other contents accordingly. In case the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking triggerResize() on the Splitter.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "orientation",
            type: "sap.ui.core.Orientation",
            defaultValue: "Horizontal",
            group: "Behavior",
            visibility: "public",
            description:
              "Whether to split the contents horizontally (default) or vertically.",
            methods: ["getOrientation", "setOrientation"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Appearance",
            visibility: "public",
            description: "The width of the control",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Appearance",
            visibility: "public",
            description: "The height of the control",
            methods: ["getHeight", "setHeight"]
          }
        ],
        aggregations: [
          {
            name: "contentAreas",
            singularName: "contentArea",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.",
            methods: [
              "getContentAreas",
              "destroyContentAreas",
              "insertContentArea",
              "addContentArea",
              "removeContentArea",
              "indexOfContentArea",
              "removeAllContentAreas"
            ]
          }
        ],
        defaultAggregation: "contentAreas",
        events: [
          {
            name: "resize",
            visibility: "public",
            description: "Event is fired when contents are resized.",
            parameters: {
              id: {
                name: "id",
                type: "string",
                description:
                  "The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event."
              },
              oldSizes: {
                name: "oldSizes",
                type: "int[]",
                description:
                  "An array of values representing the old (pixel-)sizes of the splitter contents"
              },
              newSizes: {
                name: "newSizes",
                type: "int[]",
                description:
                  "An array of values representing the new (pixel-)sizes of the splitter contents"
              }
            },
            methods: ["attachResize", "detachResize", "fireResize"]
          }
        ],
        designtime: "sap/ui/layout/designtime/Splitter.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Splitter.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "resize",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    id: {
                      name: "id",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event."
                    },
                    oldSizes: {
                      name: "oldSizes",
                      type: "int[]",
                      optional: false,
                      description:
                        "An array of values representing the old (pixel-)sizes of the splitter contents"
                    },
                    newSizes: {
                      name: "newSizes",
                      type: "int[]",
                      optional: false,
                      description:
                        "An array of values representing the new (pixel-)sizes of the splitter contents"
                    }
                  }
                }
              }
            }
          ],
          description: "Event is fired when contents are resized."
        }
      ],
      methods: [
        {
          name: "addContentArea",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContentArea",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The contentArea to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some contentArea to the aggregation {@link #getContentAreas contentAreas}."
        },
        {
          name: "attachResize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.layout.Splitter</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:resize resize} event of this <code>sap.ui.layout.Splitter</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.layout.Splitter</code> itself.\n\nEvent is fired when contents are resized."
        },
        {
          name: "destroyContentAreas",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the contentAreas in the aggregation {@link #getContentAreas contentAreas}."
        },
        {
          name: "detachResize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:resize resize} event of this <code>sap.ui.layout.Splitter</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "disableAutoResize",
          visibility: "protected",
          parameters: [
            {
              name: "bTemporarily",
              type: "boolean",
              optional: true,
              defaultValue: false,
              description:
                "Only disable autoResize temporarily (used for live resize), so that the previous status can be restored afterwards"
            }
          ],
          description:
            "Disables the resize handler for this control, this leads to an automatic resize of the contents whenever the control changes its size. The resize handler is enabled in every control instance by default. For performance reasons this behavior can be disabled by calling disableAutoResize()",
          deprecated: {
            since: "1.21",
            text:
              "This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface"
          }
        },
        {
          name: "disableKeyboardSupport",
          visibility: "protected",
          description:
            "Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars to non-focussable elements."
        },
        {
          name: "disableLiveResize",
          visibility: "protected",
          description:
            "Disables recalculation and resize of the splitter contents while dragging the splitter bar. This means that the contents are resized only once after moving the splitter bar.",
          deprecated: {
            since: "1.21",
            text:
              "This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface"
          }
        },
        {
          name: "enableAutoResize",
          visibility: "protected",
          parameters: [
            {
              name: "bTemporarily",
              type: "boolean",
              optional: true,
              defaultValue: false,
              description:
                "Only enables autoResize if it was previously disabled temporarily (used for live resize)"
            }
          ],
          description:
            "Enables the resize handler for this control, this leads to an automatic resize of the contents whenever the control changes its size. The resize handler is enabled in every control instance by default. For performance reasons this behavior can be disabled by calling disableAutoResize()",
          deprecated: {
            since: "1.21",
            text:
              "This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface"
          }
        },
        {
          name: "enableKeyboardSupport",
          visibility: "protected",
          description:
            "Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars focussable elements."
        },
        {
          name: "enableLiveResize",
          visibility: "protected",
          description:
            "Enables recalculation and resize of the splitter contents while dragging the splitter bar. This means that the contents are resized several times per second when moving the splitter bar.",
          deprecated: {
            since: "1.21",
            text:
              "This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface"
          }
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.Splitter with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireResize",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                id: {
                  name: "id",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event."
                },
                oldSizes: {
                  name: "oldSizes",
                  type: "int[]",
                  optional: true,
                  description:
                    "An array of values representing the old (pixel-)sizes of the splitter contents"
                },
                newSizes: {
                  name: "newSizes",
                  type: "int[]",
                  optional: true,
                  description:
                    "An array of values representing the new (pixel-)sizes of the splitter contents"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:resize resize} to attached listeners."
        },
        {
          name: "getCalculatedSizes",
          visibility: "protected",
          returnValue: {
            type: "Number[]",
            description:
              "Array of px values that correspond to the content area sizes"
          },
          description:
            "Returns the current actual content sizes as pixel value - these values can change with every resize.",
          deprecated: {
            since: "1.21",
            text:
              "This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface"
          }
        },
        {
          name: "getContentAreas",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContentAreas contentAreas}.\n\nThe content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nThe height of the control\n\nDefault value is <code>100%</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.Splitter."
        },
        {
          name: "getOrientation",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Orientation",
            description: "Value of property <code>orientation</code>"
          },
          description:
            "Gets current value of property {@link #getOrientation orientation}.\n\nWhether to split the contents horizontally (default) or vertically.\n\nDefault value is <code>Horizontal</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nThe width of the control\n\nDefault value is <code>100%</code>."
        },
        {
          name: "indexOfContentArea",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContentArea",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The contentArea whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContentAreas contentAreas}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContentArea",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContentArea",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The contentArea to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the contentArea should be inserted at; for a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value greater than the current size of the aggregation, the contentArea is inserted at the last position"
            }
          ],
          description:
            "Inserts a contentArea into the aggregation {@link #getContentAreas contentAreas}."
        },
        {
          name: "removeAllContentAreas",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContentAreas contentAreas}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContentArea",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed contentArea or <code>null</code>"
          },
          parameters: [
            {
              name: "vContentArea",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The contentArea to remove or its index or id"
            }
          ],
          description:
            "Removes a contentArea from the aggregation {@link #getContentAreas contentAreas}."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nThe height of the control\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "setOrientation",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sOrientation",
              type: "sap.ui.core.Orientation",
              optional: false,
              description: "New value for property <code>orientation</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getOrientation orientation}.\n\nWhether to split the contents horizontally (default) or vertically.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Horizontal</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.Splitter",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nThe width of the control\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "triggerResize",
          visibility: "public",
          parameters: [
            {
              name: "forceDirectly",
              type: "boolean",
              optional: true,
              defaultValue: false,
              description: "Do not delay the resize, trigger it right now."
            }
          ],
          description:
            "This method triggers a resize on the Splitter - meaning it forces the Splitter to recalculate all sizes. This method should only be used in rare cases, for example when the CSS that defines the sizes of the splitter bars changes without triggering a rerendering of the splitter."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.SplitterLayoutData",
      basename: "SplitterLayoutData",
      resource: "sap/ui/layout/SplitterLayoutData.js",
      module: "sap/ui/layout/SplitterLayoutData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.22.0",
      extends: "sap.ui.core.LayoutData",
      description:
        'Holds layout data for the splitter contents. Allowed size values are numeric values ending in "px" and "%" and the special case "auto". (The CSS value "auto" is used internally to recalculate the size of the content dynamically and is not directly set as style property.)',
      experimental: {
        since: "1.22.0",
        text: "API is not yet finished and might change completely"
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "resizable",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the control in the splitter can be resized or not.",
            methods: ["getResizable", "setResizable"]
          },
          {
            name: "size",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Dimension",
            visibility: "public",
            description: "Sets the size of the splitter content.",
            methods: ["getSize", "setSize"]
          },
          {
            name: "minSize",
            type: "int",
            defaultValue: 0,
            group: "Dimension",
            visibility: "public",
            description: "Sets the minimum size of the splitter content in px.",
            methods: ["getMinSize", "setMinSize"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new SplitterLayoutData.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.SplitterLayoutData."
        },
        {
          name: "getMinSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>minSize</code>"
          },
          description:
            "Gets current value of property {@link #getMinSize minSize}.\n\nSets the minimum size of the splitter content in px.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getResizable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>resizable</code>"
          },
          description:
            "Gets current value of property {@link #getResizable resizable}.\n\nDetermines whether the control in the splitter can be resized or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>size</code>"
          },
          description:
            "Gets current value of property {@link #getSize size}.\n\nSets the size of the splitter content.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "setMinSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitterLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinSize",
              type: "int",
              optional: false,
              description: "New value for property <code>minSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinSize minSize}.\n\nSets the minimum size of the splitter content in px.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setResizable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitterLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResizable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>resizable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResizable resizable}.\n\nDetermines whether the control in the splitter can be resized or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.SplitterLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSize",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>size</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSize size}.\n\nSets the size of the splitter content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>auto</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.layout.VerticalLayout",
      basename: "VerticalLayout",
      resource: "sap/ui/layout/VerticalLayout.js",
      module: "sap/ui/layout/VerticalLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.16.0",
      extends: "sap.ui.core.Control",
      description:
        "In this layout the content controls are rendered one below the other.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description:
              "Width of the <code>VerticalLayout</code>. If no width is set, the width of the content is used. If the content of the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "enabled",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "If not enabled, all controls inside are not enabled automatically.",
            methods: ["getEnabled", "setEnabled"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Content controls within the layout.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/ui/layout/designtime/VerticalLayout.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "Id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new VerticalLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.VerticalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.VerticalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.layout.VerticalLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAccessibilityInfo",
          visibility: "protected",
          returnValue: {
            type: "object",
            description:
              "An object with the accessibilty infos for this control"
          },
          references: ["sap.ui.core.Control#getAccessibilityInfo"]
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nContent controls within the layout."
        },
        {
          name: "getEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enabled</code>"
          },
          description:
            "Gets current value of property {@link #getEnabled enabled}.\n\nIf not enabled, all controls inside are not enabled automatically.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.layout.VerticalLayout."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the <code>VerticalLayout</code>. If no width is set, the width of the content is used. If the content of the layout has a larger width than the layout, it is cut off. There is no scrolling inside the layout."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.VerticalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.VerticalLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnabled enabled}.\n\nIf not enabled, all controls inside are not enabled automatically.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.layout.VerticalLayout",
            description: "This pointer for chaining"
          },
          parameters: [
            {
              name: "width",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "The new width"
            }
          ],
          description:
            "Sets the width of the Vertical Layout without rerendering of the whole control, and everything inside it."
        }
      ]
    }
  ]
};