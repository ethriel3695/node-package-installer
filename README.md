Reuben Package Installer -- Use to install node modules

SUMMARY

The program accepts an array of strings defining packages and their dependencies.

Each string contains the name of a package followed by a colon and space then any dependencies required by the package.

Example Input:

[ "react-dom: react", "react: " ]

The user will get a rejection message of invalid if the dependency list contains cycles.

Example Input of Error:

[
    "react-router-dom: react-dom",
    "react-dom: react",
    "react: react-router-dom"
]

NOTE: React is meant to be the parent and it points back to the grandchild dependency of react-router-dom.