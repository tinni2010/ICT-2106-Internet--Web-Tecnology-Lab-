let students = [
  { id: 101, name: 'Rahim', section: 'A', year: '2nd' },
  { id: 102, name: 'Karim', section: 'B', year: '2nd' },
  { id: 103, name: 'Jamal', section: 'C', year: '3rd' }
];

function displayStudents() {
  const list = document.getElementById('studentList');
  list.innerHTML = '';
  students.forEach(student => {
    list.innerHTML += `<li>
      ID: ${student.id}, Name: ${student.name}, Section: ${student.section}, Year: ${student.year}
    </li>`;
  });
}

// Show initial list
displayStudents();

document.getElementById('updateBtn').addEventListener('click', () => {
  // Remove first student
  students.shift();

  // Add new student
  students.push({ id: 104, name: 'Selina', section: 'A', year: '1st' });

  // Show updated list
  displayStudents();
});
