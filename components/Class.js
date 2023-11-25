import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const CLASES = [
  {
    id: 1,
    class: "ECONOMY",
    icon: "fas fa-wheelchair",
  },
  {
    id: 2,
    class: "PREMIUM ECONOMY",
    icon: "fas fa-chair",
  },
  {
    id: 3,
    class: "BUSINESS CLASS",
    icon: "fas fa-couch",
  },
  {
    id: 4,
    class: "FIRST CLASS",
    icon: "fas fa-couch",
  },
];
export default function Class({ setclasse, setnameofclassName }) {
  const [selected, setSelected] = useState(true);
  const [generate, setgenerate] = useState("none");
  const [classes, setclasses] = useState("ECONOMY");
  const [classesNo, setclassesNo] = useState(1);
  const [children, setchildren] = useState(0);
  const [adult, setadult] = useState(1);

  function done() {
    setgenerate("none");
  }
  function show() {
    document.querySelectorAll(".menuflitem-2").forEach(function (el) {
      el.style.display = "block";
    });
    document
      .querySelectorAll(
        ".menuflitem-1,.menuflitem-3,.menuflitemb-3,.menuflitem-4,.menuflitem-5,.menuflitem-6"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
    setgenerate("block");
  }
  const handleSetValue = (id, classValue) => {
    setnameofclassName(classValue);
    setclasses(classValue);
    setclasse(id);
    setgenerate("none");
  };

  // dropdown hide > outside click hide
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setgenerate("none");

      document
        .querySelectorAll(
          ".menuflitem-1,.menuflitem-3,.menuflitemb-3,.menuflitem-4,.menuflitem-5,.menuflitem-6"
        )
        .forEach(function (el) {
          el.style.display = "none";
        });
    });
  }, []);
  function documentoutside(e) {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  }
  console.log(classes);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div
        className="relative w-full documentoutside"
        onClick={(e) => documentoutside(e)}
      >
        <Listbox.Button
          className="btnid-1 text-left button-infant-parent button-infant d-flex  align-items-center justify-content-center w-100"
          onClick={() => show()}
        >
          <span className="inline-block mr-3">
            <i className="fa fa-couch text-blue-500"></i>
          </span>
          <div className="text-truncate flex-grow-1">
            <div className="text-truncate w-100">{classes}</div>
          </div>
          <span className="pointer-events-none">
            {/* <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            /> */}
          </span>
        </Listbox.Button>

        <div
          className="menuflitem-2 sbeco-icongent button-infant-menu absolute pl-0 w-full py-1 mt-1 bg-white rounded-md shadow-lg max-h-auto z-50 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
          style={{
            display: generate,
            position: "absolute ",
            zIndex: 99,
            width: "30%",
            padding: "20px",
          }}
        >
          {CLASES.map((item, index) => {
            return (
              <div
                className="py-2 px-3 text-black cursor-pointer hover:bg-gray-100"
                onClick={() => handleSetValue(item.id, item.class)}
              >
                <div className="sbeco-icon">
                  <i className={`${item.icon} text-blue-500`}></i>
                </div>
                {item.class}
              </div>
            );
          })}
        </div>
      </div>
    </Listbox>
  );
}
