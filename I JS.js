function updateContent(parentEl)  {

//HER LIGGER INPUTS SOM KAN ENDRES	
	let children = parentEl.getElementsByTagName('*');
	let inputTitle = findFirstOfClass(inputTitleClass, children);
	let inputBread = findFirstOfClass(inputBreadClass, children);
    let inputDate = findFirstOfClass(inputDateclass, children);
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
