import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

function Dragging(props) {
  function drag(element) {
    let draggable = element.target;

    draggable.onmousedown = function (event) {
      draggable.style.position = "absolute";
      draggable.style.zIndex = 1000;

      document.body.append(draggable);
      moveAt(event.pageX, event.PageY);

      function moveAt(pageX, PageY) {
        draggable.style.left = pageX - draggable.offsetWidth / 2 + "px";
        draggable.style.top = PageY - draggable.offsetWidth / 2 + "px";
      }

      let currentDroppable = null;

      function onMouseMove(event) {
        moveAt(event.pageX, event.PageY);
        draggable.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        draggable.hidden = false;

        if (!elemBelow) {
          return;
        }

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable !== droppableBelow) {
          if (currentDroppable) {
            // leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            // enterDroppable(currentDroppable);
          }
        }
      }
    };
  }

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".draggable"));
    elements.map((e) =>
      e.addEventListener("mouseenter", function (e) {
        drag(e);
      })
    );
  });

  return <Box> {props.children} </Box>;
}

export default Dragging;
