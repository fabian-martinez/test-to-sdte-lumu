module.exports = {
    default: {
        paths: ['./features/**/*.feature'],
        parallel: 1,
        format: ['html:cucumber-report.html'],
        formatOptions: {"snippetInterface": "synchronous"},
        import: ['./steps/**/*.js']
    }
}