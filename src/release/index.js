/**
 * @file src/release/index.js
 *
 * Copyright (c) 2020 Simon Fraser University
 * Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @brief Entry point for release command
 *
 * This command (pkp-plugin release) is to be implemented
 */

const { warn, info } = require('../utils/log')
const publishRelease = require('./publishRelease')

module.exports = args => {
  const {
    _: [, pluginName],
    newversion,
    newVersion
  } = args

  const version = newversion || newVersion

  info(`Releasing ${pluginName} (version to release: ${version})`)

  publishRelease(version, pluginName)
}
