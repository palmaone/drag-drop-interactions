const king = document.getElementById('king');
const squares = document.querySelectorAll('.square');
const info = document.getElementById('info');

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart);

squares.forEach(square=> {
    console.log(square);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('dragend', dragEnd);
    square.addEventListener('drop', dragDrop);
});

let beingDragged;

function dragEnd(e){
    e.target.classList.add('target');
    setTimeout(() => {
        e.target.classList.remove('target');
    }, 100);
    info.textContent = '';
}

function dragLeave(e){
    console.log("dragLeave", e);
    e.target.closest('.square').classList.remove('highLight');
    // e.explicitOriginalTarget.classList.remove('highLight');
}
function dragEnter(e){
    e.target.closest('.square').classList.add('highLight');
}

function dragging(e){   
    info.textContent = 'You are dragging the ' + beingDragged.id;
}

function dragStart(e){
    console.log(e.target);
    beingDragged = e.target;
}

function dragOver(e){
    console.log("dragOver", e);
    e.preventDefault();
}

function dragDrop(e){
    console.log("dragDrop", e.target);
    e.target.append(beingDragged);
    e.target.classList.remove('highlight');

}