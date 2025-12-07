export function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const diff = Date.now() - birth.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}
