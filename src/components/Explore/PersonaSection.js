function PersonaSection({ persona }) {
    return (
        <div className="personaGrid">
            <div className="ng">
                <div className="pfp">
                    <img src={persona.image} alt={persona.name} loading='lazy' />
                    <h3 style={{ color: "white", paddingTop: "40px", fontSize: "30px" }}>
                        {persona.name}
                    </h3>
                </div>
                <div className="dmg">
                    <h2>Demographics</h2>
                    <table>
                        {persona.demographics.map((item, index) => (
                            <tr key={index}>
                                <th>{item.label} :</th>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <div className="tech">
                    <h2>Technology</h2>
                    <div className="techImgs">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 2.5H2.5C1.11979 2.5 0 3.61979 0 5V21.6667C0 23.0469 1.11979 24.1667 2.5 24.1667H12.5L11.6667 26.6667H7.91667C7.22396 26.6667 6.66667 27.224 6.66667 27.9167C6.66667 28.6094 7.22396 29.1667 7.91667 29.1667H22.0833C22.776 29.1667 23.3333 28.6094 23.3333 27.9167C23.3333 27.224 22.776 26.6667 22.0833 26.6667H18.3333L17.5 24.1667H27.5C28.8802 24.1667 30 23.0469 30 21.6667V5C30 3.61979 28.8802 2.5 27.5 2.5ZM26.6667 20.8333H3.33333V5.83333H26.6667V20.8333Z" fill="#696969" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.25 22H17.8847C17.85 22.9286 17.1952 23.5 16.35 23.5H13.5C12.6239 23.5 11.9522 22.6811 11.9639 22H0.75C0.3375 22 0 22.3375 0 22.75V23.5C0 25.15 1.35 26.5 3 26.5H27C28.65 26.5 30 25.15 30 23.5V22.75C30 22.3375 29.6625 22 29.25 22ZM27 4.75C27 3.5125 25.9875 2.5 24.75 2.5H5.25C4.0125 2.5 3 3.5125 3 4.75V20.5H27V4.75ZM24 17.5H6V5.5H24V17.5Z" fill="#696969" />
                        </svg>
                        <svg width="20" height="30" viewBox="0 0 20 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2705 0H3.14551C1.59277 0 0.333008 1.25977 0.333008 2.8125V27.1875C0.333008 28.7402 1.59277 30 3.14551 30H16.2705C17.8232 30 19.083 28.7402 19.083 27.1875V2.8125C19.083 1.25977 17.8232 0 16.2705 0ZM9.70801 28.125C8.6709 28.125 7.83301 27.2871 7.83301 26.25C7.83301 25.2129 8.6709 24.375 9.70801 24.375C10.7451 24.375 11.583 25.2129 11.583 26.25C11.583 27.2871 10.7451 28.125 9.70801 28.125ZM16.2705 21.7969C16.2705 22.1836 15.9541 22.5 15.5674 22.5H3.84863C3.46191 22.5 3.14551 22.1836 3.14551 21.7969V3.51562C3.14551 3.12891 3.46191 2.8125 3.84863 2.8125H15.5674C15.9541 2.8125 16.2705 3.12891 16.2705 3.51562V21.7969Z" fill="#696969" />
                        </svg>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9375 0H5.3125C3.75977 0 2.5 1.25977 2.5 2.8125V27.1875C2.5 28.7402 3.75977 30 5.3125 30H25.9375C27.4902 30 28.75 28.7402 28.75 27.1875V2.8125C28.75 1.25977 27.4902 0 25.9375 0ZM15.625 28.125C14.5879 28.125 13.75 27.2871 13.75 26.25C13.75 25.2129 14.5879 24.375 15.625 24.375C16.6621 24.375 17.5 25.2129 17.5 26.25C17.5 27.2871 16.6621 28.125 15.625 28.125ZM25.9375 21.7969C25.9375 22.1836 25.6211 22.5 25.2344 22.5H6.01562C5.62891 22.5 5.3125 22.1836 5.3125 21.7969V3.51562C5.3125 3.12891 5.62891 2.8125 6.01562 2.8125H25.2344C25.6211 2.8125 25.9375 3.12891 25.9375 3.51562V21.7969Z" fill="#696969" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="ng2">
                {persona.sections.map((section, index) => (
                    <div key={index} className={`personaGridItem upr${index + 1}`}>
                        <div className="head">
                            <svg
                                width="24"
                                height="24"
                                viewBox={section.svg.viewBox}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d={section.svg.path}
                                    fill="#696969"
                                />
                            </svg>
                            <h1>{section.title}</h1>
                        </div>
                        <ul>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PersonaSection;