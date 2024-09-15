module.exports = {
    default: {
        paths: ['./features/**/*.feature'],
        parallel: 0,
        format: ['html:cucumber-report.html'],
        formatOptions: {"snippetInterface": "synchronous"},
        import: ['./steps/**/*.js']
    }
}