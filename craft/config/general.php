<?php ## craft/config/general.php

  /**
   * General Configuration
   *
   * All of your system's general configuration settings go in here.
   * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
   */

  return array(
    '*' => array(
      // Config overrides for all of our environments
    ),

    'live' => array(
      // Config overrides for our live environment
      'siteUrl' => 'http://serabeena.com/',
      'omitScriptNameInUrls' => true,
    ),

    'stage' => array(
      // Config overrides for our staging environment
      'siteUrl' => 'http://serabeena.eu1.frbit.net',
      'devMode' => true,
      'omitScriptNameInUrls' => true,
    ),

    'local' => array(
      // Config overrides for our local environment
      'siteUrl' => 'http://serabeena.dev:8888/',
      'devMode' => true,
      'userSessionDuration'           => 'P101Y',
      'rememberedUserSessionDuration' => 'P101Y',
      'rememberUsernameDuration'      => 'P101Y',
      'invalidLoginWindowDuration'    => 'P101Y',
      'cooldownDuration'              => 'PT1S',
      'maxInvalidLogins'              => 101,
    ),
  );

?>