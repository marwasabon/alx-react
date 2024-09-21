export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export const getLatestNotification = () => "<strong>Urgent Requirement</strong> - complete by EOD";test("returns current year", () => {  
  expect(getFullYear()).toBe(new Date().getFullYear());  
}); 


