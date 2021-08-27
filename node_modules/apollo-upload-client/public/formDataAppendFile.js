'use strict';

module.exports = function formDataAppendFile(formData, fieldName, file) {
  formData.append(fieldName, file, file.name);
};
