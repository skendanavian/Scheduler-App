/* Helpers for parsing DB data for use in rendering */

export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;

  if (!days.length) {
    return [];
  }

  const apptId = days.find((e) => e.name === day);
  if (!apptId) {
    return [];
  }
  const apptNums = apptId.appointments;

  if (apptId === undefined || !apptNums.length) {
    return [];
  }

  const appts = apptNums.map((id) => {
    return appointments[id];
  });

  return appts;
}

export function getInterview(state, interview) {
  const { interviewers } = state;

  if (!interview) {
    return null;
  }

  const individualInterviewer = interviewers[interview.interviewer];

  const interviewData = {
    student: interview.student,
    interviewer: individualInterviewer,
  };

  return interviewData;
}

export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state;

  if (!days.length) {
    return [];
  }

  const interviewerId = days.find((e) => e.name === day);
  if (!interviewerId) {
    return [];
  }
  const interviewerNums = interviewerId.interviewers;

  if (interviewerId === undefined || !interviewerNums.length) {
    return [];
  }

  const specificInterviewers = interviewerNums.map((id) => {
    return interviewers[id];
  });

  return specificInterviewers;
}
