import React from "react";
import './Sidebar.css'

function Sidebar() {
    const notes = [
        {
            module: "Mathematik 1",
            semester: 1,
            note_name: "Notizenname 1",
            note_id: "834z2428047027402"
        },
        {
            module: "Mathematik 1",
            semester: 1,
            note_name: "Notizenname 2",
            note_id: "834z2428047027403"
        },
        {
            module: "Physik 1",
            semester: 1,
            note_name: "Notizenname 3",
            note_id: "834z2428047027404"
        },
        {
            module: "Mathematik 2",
            semester: 2,
            note_name: "Notizenname 4",
            note_id: "834z2428047027405"
        },
        {
            module: "Wirtschaftsinformatik 2",
            semester: 3,
            note_name: "Erel 4",
            note_id: "834z2428047027405"
        }
    ];

    
    const groupedNotes = groupNotesBySemesterAndModule(notes);

    const ladeText = (note_id) => {
        console.log(note_id);
    };

    return (
        <div className="sidebar">
            <ul>
                {Object.entries(groupedNotes).map(([semester, modules], semesterIndex) => (
                    <li key={semesterIndex}>
                       <span className="semester-header">{semester}</span>
                        <ul>
                            {Object.entries(modules).map(([module, noteList], moduleIndex) => (
                                <li  key={moduleIndex}>
                                    <span class = "Modul">{module}</span>
                                    <ul>
                                        {noteList.map((note, noteIndex) => (
                                            <li class = "TextName"  key={note.note_id} onClick={() => ladeText(note.note_id)}>
                                                {note.note_name}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;

function groupNotesBySemesterAndModule(notes) {
    const grouped = {};

    notes.forEach(note => {
        const semesterKey = `Semester ${note.semester}`;
        if (!grouped[semesterKey]) {
            grouped[semesterKey] = {};
        }

        const moduleKey = note.module;
        if (!grouped[semesterKey][moduleKey]) {
            grouped[semesterKey][moduleKey] = [];
        }

        grouped[semesterKey][moduleKey].push({
            note_name: note.note_name,
            note_id: note.note_id
        });
    });

    return grouped;
}

