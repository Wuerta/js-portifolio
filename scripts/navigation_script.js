function addNavigationListener(id) {
  const navigationAncor = document.getElementById(id);
  navigationAncor.onclick = onNavigationClickEvent;
}

function onNavigationClickEvent(event) {
  const id = event.target.localName == 'li' ? event.target.firstChild.hash : event.target.hash;
  removeSelectedAtributeToSections();
  addSelectedAttributeToSection(id);
}

function removeSelectedAtributeToSections() {
  const sections = document.getElementsByClassName("main-section");
  
  for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    section.classList.remove("selected");
  }
}

function addSelectedAttributeToSection(id) {
  document.querySelector(id).classList.add('selected');
}
