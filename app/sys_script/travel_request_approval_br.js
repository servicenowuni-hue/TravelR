(function executeRule(current, previous /*null when async*/) {
  // Business rule for travel request approval
  if (current.u_status == 'submitted' && previous.u_status != 'submitted') {
    // Create approval record
    var approval = new GlideRecord('sysapproval_approver');
    approval.initialize();
    approval.sysapproval = current.sys_id;
    approval.approver = current.u_requested_by.manager; // Assume manager approves
    approval.insert();
  }
})(current, previous);