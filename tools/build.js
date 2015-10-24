{
    appDir: '../www',
    mainConfigFile: '../www/js/main.js',
    dir: '../www-build',
    modules: [
        // Common modules
        {
            name: '../main',
            include: ['jquery', '../app/modules/moduleC']
        },

        // Index page
        {
            name: '../index',
            include: ['../app/index'],
            exclude: ['../main']
        },

        // About page
        {
            name: '../about',
            include: ['../app/about'],
            exclude: ['../main']
        }
    ]
}