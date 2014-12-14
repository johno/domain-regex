'use strict';

module.exports = function() {
  return /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,30}|[a-zA-Z0-9-]{2,21}\.[a-zA-Z]{2,13})$/;
};
