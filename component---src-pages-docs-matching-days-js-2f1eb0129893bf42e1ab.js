webpackJsonp([0xc4de10cb64e4],{311:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),d=a(n),r=l(9),u=a(r),c=l(14),f=a(c),s=l(16),o=a(s),i=l(5),m=a(i),h=l(50),y=a(h);t.default=function(){return d.default.createElement(f.default,{title:"Matching days with modifiers"},d.default.createElement("p",null,"With ",d.default.createElement("em",null,"modifiers")," you change the aspect of the day cells and customize the interaction with the calendar. When a modifier matches a specific day, its day cells receives the modifier’s name as CSS class."),d.default.createElement("p",null,"In the following example, the ",d.default.createElement("code",null,"highlighted")," modifier is used to paint the 19th of September with an orange background. Using the browser’s developer tools, note how that day receives a"," ",d.default.createElement("code",null,"DayPicker-Day--highlighted")," CSS class."),d.default.createElement(m.default,{name:"modifiers-01"}),d.default.createElement("blockquote",null,d.default.createElement("p",null,"Modifers CSS classes are generated automatically to follow a"," ",d.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://css-tricks.com/bem-101/"},"BEM-like syntax"),". You can change the name of the classes using the"," ",d.default.createElement(u.default,{to:"/api/DayPicker#classnames"},d.default.createElement("code",null,"classNames"))," ","prop, or even use"," ",d.default.createElement(u.default,{to:"/docs/styling#styling-css-modules"},"modifiers with CSS modules"),".")),d.default.createElement("h2",null,"Type of modifiers"),d.default.createElement("p",null,"A modifier can be either:"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"a ",d.default.createElement("code",null,"Date")," object"),d.default.createElement("br",null),"to match a specific day, as the example above")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"a range object")," with ",d.default.createElement("code",null,"from")," and"," ",d.default.createElement("code",null,"to")," keys",d.default.createElement("br",null),"to match a range of days:",d.default.createElement(o.default,null,"const highlighted = { \n  from: new Date(2018, 0, 12), \n  to: new Date(2018, 0, 16) \n}\n<DayPicker modifiers={ highlighted } />\n// .DayPicker-Day--highlighted\n")),d.default.createElement("p",null,"will match the days between the 12th and the 16th of January.")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"an object with a ",d.default.createElement("code",null,"before")," and/or ",d.default.createElement("code",null,"after")," key"),d.default.createElement("br",null),"to match the days before and/or after the given date:"),d.default.createElement(o.default,null,"const past = { \n  before: new Date(),\n}\n<DayPicker modifiers={ past } />\n// .DayPicker-Day--past"),d.default.createElement("p",null,"The code above will match all the past the days (i.e. the days before today)."),d.default.createElement(o.default,null,"const future = { \n  after: new Date(2018, 0, 1), \n}\n<DayPicker modifiers={ future } />\n// .DayPicker-Day--future"),d.default.createElement("p",null,"The code above will match all the days after the January, 1st 2018."),d.default.createElement(o.default,null,"const range = { \n  after: new Date(2020, 5, 20), \n  before: new Date(2020, 5, 30), \n}\n<DayPicker modifiers={ range } />\n// .DayPicker-Day--range"),d.default.createElement("p",null,"The code above will match all the days between the 30th and the 20th of April 2018.")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"an object with a ",d.default.createElement("code",null,"daysOfWeek")," array"),d.default.createElement("br",null),"to match specific days of week:"),d.default.createElement(o.default,null,"const weekends = { \n  daysOfWeek: [0, 6],\n}\n<DayPicker modifiers={ weekends } />\n// .DayPicker-Day--weekends"),d.default.createElement("p",null,"will match all the Sundays (",d.default.createElement("code",null,"0"),") and Saturdays (",d.default.createElement("code",null,"6"),")")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"a function")," taking the day as first argument and returning a boolean value:"),d.default.createElement(o.default,null,"function sunday(day) {\n  return day.getDay() === 0;\n}\nfunction firstOfMonth(day) {\n  return day.getDate() === 1;\n}\n<DayPicker modifiers={ {sunday, firstOfMonth} } />\n// .DayPicker-Day--sunday, .DayPicker-Day--firstOfMonth")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("strong",null,"an array of the above"),":"),d.default.createElement(o.default,null,"\n<DayPicker modifiers={ [weekends, sunday, firstOfMonth] } />\n// .DayPicker-Day--weekends, .DayPicker-Day--sunday, .DayPicker-Day--firstOfMonth"))),d.default.createElement("h3",null,"Default modifiers"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("code",null,"--today")," is added to the today cell")),d.default.createElement("li",null,d.default.createElement("p",null,d.default.createElement("code",null,"--outside")," is added for the day outside the month"))),d.default.createElement("h3",null,"Shortcuts for ",d.default.createElement("code",null,"selected")," and ",d.default.createElement("code",null,"disabled")," modifiers"),d.default.createElement("p",null,"Under the hood, the ",d.default.createElement("code",null,"selectedDays")," and"," ",d.default.createElement("code",null,"disabledDays")," props act as shortcut for the"," ",d.default.createElement("code",null,"selected")," and a ",d.default.createElement("code",null,"disabled")," modifiers. The following renders the same calendar:"),d.default.createElement(o.default,null,"function isFirstOfMonth(day) {\n  return day.getDate() === 1;\n}\n\n<DayPicker disabledDays={ sundays } selectedDays={ isFirstOfMonth } />\n\n<DayPicker \n  modifiers={ { \n    disabled: { daysOfWeek: [0] }, \n    selected: isFirstOfMonth \n  }} \n/>"),d.default.createElement("h2",null,"Accessing modifiers from event handlers"),d.default.createElement("p",null,"Modifiers are passed as argument to the event handlers."),d.default.createElement(m.default,{name:"modifiers-02"}),d.default.createElement(y.default,{to:"/docs/styling",label:"Styling"}))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-docs-matching-days-js-2f1eb0129893bf42e1ab.js.map