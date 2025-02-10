"use client";

import { FiX } from "react-icons/fi";


export default function Modal() {

    return (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-3xl w-full relative shadow-xl">
                <button
                    // onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                    <FiX className="w-6 h-6 text-gray-600" />
                </button>

                {/* <div className="grid gap-6">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-[#1d4a54]">{selectedProject.name}</h2>
                        <span className={`px-4 py-2 rounded-full text-sm ${statusStyles[selectedProject.status as Status]}`}>
                            {selectedProject.status}
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Users className="w-6 h-6 text-[#286672] flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-[#1d4a54] mb-1">Client</h3>
                                    <p className="text-gray-600">{selectedProject.client}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Code className="w-6 h-6 text-[#286672] flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-[#1d4a54] mb-1">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-[#286672]/10 text-[#1d4a54] rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <ListChecks className="w-6 h-6 text-[#286672] flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-[#1d4a54] mb-1">Key Deliverables</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.deliverables.map((item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-[#1d4a54] mb-3">Project Overview</h3>
                                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-5 h-5" />
                                        <span>Deadline</span>
                                    </div>
                                    <span className="font-medium text-[#1d4a54]">{selectedProject.deadline}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Zap className="w-5 h-5" />
                                        <span>Budget</span>
                                    </div>
                                    <span className="font-medium text-[#1d4a54]">{selectedProject.budget}</span>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-gray-600">
                                        <span>Progress</span>
                                        <span>{selectedProject.progress}%</span>
                                    </div>
                                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#1d4a54] to-[#286672] transition-all duration-500"
                                            style={{ width: `${selectedProject.progress}%` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-[#1d4a54] mb-4">Development Team</h3>
                        <div className="flex flex-wrap gap-4">
                            {selectedProject.team.map((member, index) => (
                                <div key={index} className="flex items-center gap-3 bg-[#286672]/10 p-3 rounded-xl">
                                    <div
                                        className="w-10 h-10 bg-[#286672] rounded-full flex items-center justify-center text-white font-medium">
                                        {member}
                                    </div>
                                    <span className="font-medium text-[#1d4a54]">Member {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 justify-end border-t pt-6">
                        <button onClick={() => setSelectedProject(null)}
                            className="px-6 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            Close
                        </button>
                        <button
                            className="px-6 py-2.5 bg-gradient-to-r from-[#1d4a54] to-[#286672] text-white rounded-xl hover:shadow-md transition-all"
                            onClick={() => console.log('View full report')}
                        >
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                View Full Report
                            </div>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>

    );
}
