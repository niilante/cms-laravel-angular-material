<?php

return [
    /*
     * Put an logo image at top of sideNav
     */
    'logo'         => 'img/logo.png',

    /*
     * The id of sideNav with is called
     */
    'id'           => 'menu',

    /*
     * The toggle button to expand or close the sideNav in mobile devices
     */
    'toggle_btn' => [
        'icon' => 'menu',
        'i_color' => 'white'
    ],

    /*
     * The collection of items in sideNav
     */
    'navigation'   => [
        'General' => [
          'This link you can change' => '/',
        ]
    ],

    /*
     * The collection of user options
     */
    'user_options' => [
        'Home'          => [
            'icon'       => 'home',
            'i_color' => 'white',
            'url'        => '/',
        ],
        'Settings' => [
            'icon'       => 'settings',
            'i_color' => 'white',
            'url'        => '/settings',
        ],
        'Log out'       => [
            'icon'       => 'settings_power',
            'i_color' => 'white',
            'url'        => '/auth/logout'
        ]
    ],
];