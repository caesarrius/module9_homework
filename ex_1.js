const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function parserXml(xmlString) {
const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const result = {list: []};


studentNode.forEach((element) => {
  const student = new Object();
    
  const first = element.querySelector("first");
  const second = element.querySelector("second");
  const age = element.querySelector("age");
  const prof = element.querySelector("prof");
  const nameNode = element.querySelector("name");
  const lang = nameNode.getAttribute("lang");
        
  student.name = first.textContent + ' ' + second.textContent;
  student.age = age.textContent;
  student.prof = prof.textContent;
  student.lang = lang;

  result.list.push(student);
});

console.log(result);
}

parserXml(xmlString);

