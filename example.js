// Человек
function Human(name, age) {
  this._name = name;
  this._age = age;
}

Human.prototype.greet = function() {
  return "Здравствуйте. ";
}

Human.prototype.getName = function() {
  return this._name;
}

Human.prototype.getAge = function() {
  return this._age;
}

// Студент
function Student(name, age) {
  Human.apply(this, arguments);
  this._scores = []; // баллы студента
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
  return "[Студент " + this._name + "]: " + Human.prototype.greet.apply(this) + "Я студент " + this.getName();
}

Student.prototype.beg = function() {
  return "[Студент " + this._name + "]: Ну поставьте зачет...";
}

Student.prototype.addScores = function(scores) {
  this._scores=this._scores.concat(scores);
  return "[Студент " + this._name + "]: Добавлены оценки (" + scores + ")";
}

Student.prototype.getAverageScores = function () {
  sumScores=0;
  this._scores.forEach(function(item, i) {
    sumScores+=item;
  });
  return Math.round(sumScores/this._scores.length);
}


// Преподаватель
function Teacher(name, age, workingHours) {
  Human.apply(this, arguments);
  this._workingHours = workingHours; // количество рабочих часов
}

Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function() {
  return "[Преподаватель " + this._name + "]: " + Human.prototype.greet.apply(this) + "Я преподаватель " + this.getName();
}

Teacher.prototype.decide = function(averageScores) {
  return (averageScores>=3) ? "[Преподаватель " + this._name + "]: Ладно, давай зачетку"
  : "[Преподаватель " + this._name + "]: Встретимся на пересдаче";
}

Teacher.prototype.getWorkingHours = function() {
  return this._workingHours;
}

Teacher.prototype.getSalary = function () {
  return this._workingHours * 5; // 5 - фиксированная плата за час работы
}

// добавляем блок с информацией
function writeAlert(message) {
  var div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = message;
  document.body.appendChild(div);
}
