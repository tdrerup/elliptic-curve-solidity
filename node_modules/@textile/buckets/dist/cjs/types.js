"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveStatus = exports.PathAccessRole = exports.AbortError = void 0;
exports.AbortError = new Error('aborted');
var PathAccessRole;
(function (PathAccessRole) {
    PathAccessRole[PathAccessRole["PATH_ACCESS_ROLE_UNSPECIFIED"] = 0] = "PATH_ACCESS_ROLE_UNSPECIFIED";
    PathAccessRole[PathAccessRole["PATH_ACCESS_ROLE_READER"] = 1] = "PATH_ACCESS_ROLE_READER";
    PathAccessRole[PathAccessRole["PATH_ACCESS_ROLE_WRITER"] = 2] = "PATH_ACCESS_ROLE_WRITER";
    PathAccessRole[PathAccessRole["PATH_ACCESS_ROLE_ADMIN"] = 3] = "PATH_ACCESS_ROLE_ADMIN";
})(PathAccessRole = exports.PathAccessRole || (exports.PathAccessRole = {}));
/**
 * Archive job status codes
 */
var ArchiveStatus;
(function (ArchiveStatus) {
    /**
     * Status is not specified.
     */
    ArchiveStatus[ArchiveStatus["Unspecified"] = 0] = "Unspecified";
    /**
     * The archive job is queued.
     */
    ArchiveStatus[ArchiveStatus["Queued"] = 1] = "Queued";
    /**
     * The archive job is executing.
     */
    ArchiveStatus[ArchiveStatus["Executing"] = 2] = "Executing";
    /**
     * The archive job has failed.
     */
    ArchiveStatus[ArchiveStatus["Failed"] = 3] = "Failed";
    /**
     * The archive job was canceled.
     */
    ArchiveStatus[ArchiveStatus["Canceled"] = 4] = "Canceled";
    /**
     * The archive job succeeded.
     */
    ArchiveStatus[ArchiveStatus["Success"] = 5] = "Success";
})(ArchiveStatus = exports.ArchiveStatus || (exports.ArchiveStatus = {}));
//# sourceMappingURL=types.js.map