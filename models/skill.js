const skills = [
    {id: 1, skill: 'JavaScript', Indorsed: true},
    {id: 2, skill: 'HTML', Indorsed: false},
    {id: 3, skill: 'CSS', Indorsed: true},
    {id: 4, skill: 'Express', Indorsed: false},
    {id: 5, skill: 'Node JS', Indorsed: true},
    {id: 6, skill: 'React', Indorsed: true}
   
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  } 