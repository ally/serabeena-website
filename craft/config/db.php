<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

	'*' => array(
    // The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => 'localhost',

		// The database username to connect with.
		'user' => 'root',

		// The database password to connect with.
		'password' => 'root',

		// The name of the database to select.
		'database' => 'serabeena',

		// The prefix to use when naming tables. This can be no more than 5 characters.
		'tablePrefix' => 'craft',
  ),

  'live' => array(
    // Config overrides for our live environment
  ),

  'stage' => array(
    'server' => 'serabeena.mysql.eu1.frbit.com',

		'user' => 'serabeena',

		'password' => 'MbCStQHX_Xq48Oj6',

		'database' => 'serabeena',
  ),

  'local' => array(
    // Config overrides for our local environment
    'devMode' => true,
  ),



);
