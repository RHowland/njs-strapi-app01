module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-max-length": [2, "always", 150], // enforce a maximum header length of 100 characters
        "subject-empty": [2, "never"], // enforce a non-empty subject
        "type-empty": [2, "never"], // enforce a non-empty type
        "subject-full-stop": [1, "never", "."], // enforce no trailing period in subject
        "body-max-line-length": [0], // Disable enforcement of maximum line length in commit message body
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
            ],
        ], // enforce a list of valid types
    },
};
