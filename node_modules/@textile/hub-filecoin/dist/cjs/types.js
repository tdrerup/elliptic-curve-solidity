"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatus = void 0;
/**
 * Storage job status codes
 */
var JobStatus;
(function (JobStatus) {
    /**
     * Status is not specified.
     */
    JobStatus[JobStatus["Unspecified"] = 0] = "Unspecified";
    /**
     * The job is queued.
     */
    JobStatus[JobStatus["Queued"] = 1] = "Queued";
    /**
     * The job is executing.
     */
    JobStatus[JobStatus["Executing"] = 2] = "Executing";
    /**
     * The job has failed.
     */
    JobStatus[JobStatus["Failed"] = 3] = "Failed";
    /**
     * The job was canceled.
     */
    JobStatus[JobStatus["Canceled"] = 4] = "Canceled";
    /**
     * The job succeeded.
     */
    JobStatus[JobStatus["Success"] = 5] = "Success";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
//# sourceMappingURL=types.js.map