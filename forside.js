//SAK DIV        
const caseDivClass = "main-content";
const innerContClass = "inner-content";
const titleClass = "title";
const breadClass = "breadtext";
const dateClass = "date";
const timeClass = "time";
const placeClass = "place";
const contentClass = "case-content"
const showHideBClass = "edit-btn";
const showMoreBClass = "read-more";
const editorClass = "edit-div";
//REDIGERING DIV 
const inputTitleClass = "input-title";
const inputBreadClass = "input-bread";
const inputDateclass = "input-date";
const inputTimeClass = "input-time";
const inputPlaceClass = "input-place";
const inputContentClass = "input-content";
const saveBClass = "save-btn";
const deleteBClass = "delete-btn";


var caseDivs = document.getElementsByClassName(caseDivClass);

for (let i = 0; i < caseDivs.length; i++) {
	let children = caseDivs[i].getElementsByTagName('*');

	let editorD = findFirstOfClass(editorClass, children);
    
	let editorA = findFirstOfClass(innerContClass, children);
    
	let showHideB = findFirstOfClass(showHideBClass, children);
	
    showHideB.addEventListener("click", function () {
		if (editorA.style.display === "block") {
			showHide(editorA);
		}

		showHide(editorD);
	});
    
	let showMoreB = findFirstOfClass(showMoreBClass, children);
	
    showMoreB.addEventListener("click", function(){
	if (editorD.style.display === "block") {
		showHide(editorD);
	}

	showMore(editorA);
	});
                           
	let saveB = findFirstOfClass(saveBClass, children);
	saveB.addEventListener("click", function () {
		updateContent(caseDivs[i]);
	});
}

function showHide(el) {
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function showMore(x) {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function updateContent(parentEl) {
//HER LIGGER INPUTS SOM KAN ENDRES	
	let children = parentEl.getElementsByTagName('*');

	let inputTitle = findFirstOfClass(inputTitleClass, children);
    
	let inputBread = findFirstOfClass(inputBreadClass, children);
    
    let inputDate =
    findFirstOfClass(inputDateclass, children);
    
    let inputTime = findFirstOfClass (inputTimeClass, children);
    
    let inputPlace = findFirstOfClass (inputPlaceClass, children);
    
    let inputContent = findFirstOfClass (inputContentClass, children);

//HER ENDRES ELEMENTENE
	let title = findFirstOfClass(titleClass, children);
    
	let breadtext = findFirstOfClass(breadClass, children);
    
    let date = findFirstOfClass(dateClass, children); 
    
    let time = findFirstOfClass(timeClass, children);
    
    let place = findFirstOfClass(placeClass, children);
    
    let contentCase = findFirstOfClass(contentClass, children);
    

    title.innerHTML = inputTitle.value;
	breadtext.innerHTML = inputBread.value;
    date.innerHTML = inputDate.value;
    time.innerHTML = inputTime.value;
    place.innerHTML = inputPlace.value;
    contentCase.innerHTML = inputContent.value;

	let editor = findFirstOfClass(editorClass, children);
    showHide(editor);
}

function findFirstOfClass(className, elAr) {
	for (let i = 0; i < elAr.length; i++) {
		if (elAr[i].className === className) {
			let first = elAr[i];
			return first;
		}
	}

	return null;
}

//SLETTE SAKER
$(".deleteBClass").click(function(){
  $(".caseDivClass").detach();
});
