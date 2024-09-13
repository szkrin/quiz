import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks"; // Import React Hooks plugin

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Add React Hooks plugin and rules
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Enforce Rules of Hooks
      "react-hooks/exhaustive-deps": "warn",  // Warn for missing effect dependencies
      "react/react-in-jsx-scope": "off", // Disable the rule that requires React in scope
      "react/prop-types": "off",
    },
  },
];
// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
// import pluginReactHooks from "eslint-plugin-react-hooks";

// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: { ...globals.browser, ...globals.node },
//       parserOptions: {
//         ecmaVersion: 2021,
//         sourceType: "module",
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//   },
//   pluginJs.configs.recommended, // Recommended JavaScript rules
//   {
//     plugins: {
//       react: pluginReact,
//       "react-hooks": pluginReactHooks,
//     },
//     settings: {
//       react: {
//         version: "detect", // Automatically detects the React version
//       },
//     },
//     rules: {
//       "react/react-in-jsx-scope": "off", // Disable the rule that requires React in scope
//       "react/jsx-uses-react": "off", // Disable the rule that requires React to be in scope
//       "react-hooks/rules-of-hooks": "error", // Enforce Rules of Hooks
//       "react-hooks/exhaustive-deps": "warn",  // Warn for missing effect dependencies
//       "react/prop-types": "off", // Disable prop-types rule if not using
//     },
//   },
// ];