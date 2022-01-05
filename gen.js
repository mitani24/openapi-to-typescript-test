const fs = require("fs");
const { CodeGenerator } = require("@himenon/openapi-typescript-code-generator");
const Templates = require("@himenon/openapi-typescript-code-generator/templates");

const main = () => {
  const codeGenerator = new CodeGenerator("openapi.json");

  const apiClientGeneratorTemplate = {
    generator: Templates.ApiClient.generator,
    option: {},
  };

  const code = codeGenerator.generateTypeDefinition([
    codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
    apiClientGeneratorTemplate,
  ]);

  fs.writeFileSync("openapi-typescript-code-generator/client.ts", code, {
    encoding: "utf-8",
  });
};

main();
