import React from 'react';
import ZoomableImage from '../components/ZoomableImage';
import Quiz from '../components/Quiz';
import week1Intro from '../assets/dip_concept.png';
import week1RealIntro from '../assets/week1_dip_intro.jpg';
import week1Gamma from '../assets/week1_gamma_ray.png';
import week1Xray from '../assets/week1_xray.png';
import week1Microwave from '../assets/week1_microwave.png';
import week1Radio from '../assets/week1_radio.png';
import week1Remote from '../assets/week1_remote_sensing.png';
import week1Uv from '../assets/week1_uv.png';
import week1VisIr from '../assets/week1_visible_ir.jpg';

export const weeks = [
    {
        id: 1,
        title: "Week 1: Introduction to DIP",
        summary: "Overview of Digital Image Processing fundamentals.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">

                    <p className="text-gray-300 leading-relaxed text-justify">
                        Digital Image Processing (DIP) is the use of digital computers to process images obtained from various imaging systems.
                        A digital image is a two-dimensional representation made up of pixels, where each pixel stores intensity or color information that can be analyzed mathematically.
                    </p>
                    <p className="text-gray-300 font-medium text-justify">
                        There are several fields in Digital Image Processing:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Gamma Ray Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Gamma} alt="Gamma Ray Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">X-ray Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Xray} alt="X-ray Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Microwave Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Microwave} alt="Microwave Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Radio Band Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Radio} alt="Radio Band Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Remote Sensing</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Remote} alt="Remote Sensing" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Ultraviolet Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1Uv} alt="Ultraviolet Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-accent font-bold text-center group-hover:text-white transition-colors">Visible & Infrared Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-white/5 shadow-md group-hover:shadow-accent/20 transition-all duration-300">
                            <ZoomableImage src={week1VisIr} alt="Visible and Infrared Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-justify">
                        Digital image processing plays a crucial role across a wide range of applications and imaging modalities. In medical imaging, techniques such as gamma-ray imaging (PET and SPECT), X-ray imaging, MRI, and ultrasound enable accurate diagnosis and treatment planning by revealing internal body structures that are invisible to the human eye. In remote sensing, satellite images captured in visible, infrared, microwave, and radio wavelengths help monitor environmental changes, natural disasters, urban development, and climate patterns. Beyond healthcare and earth observation, DIP is also fundamental in astronomy, industrial inspection, security systems, biological imaging, and computer-generated visualization.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-justify">
                        One of the key strengths of digital image processing is its ability to handle images from different parts of the electromagnetic spectrum, as well as non-electromagnetic sources such as acoustic waves and electron beams. Each imaging modality provides unique information, and digital processing techniques allow these images to be enhanced, analyzed, and interpreted efficiently. As computing power and algorithms advance, especially with the integration of artificial intelligence, digital image processing continues to evolve, enabling smarter, faster, and more precise image-based systems.
                    </p>
                </div>

                <Quiz
                    question="What is DIP?"
                    options={[
                        "Capturing images using cameras only",
                        "Processing images using digital computers",
                        "Displaying images on screens",
                        "Compressing images for storage"
                    ]}
                    correctAnswerIndex={1}
                />
            </div>
        ),
        image: week1RealIntro
    },
    {
        id: 2,
        title: "Week 2: Image Enhancement (Spatial Domain)",
        summary: "Basic gray-level transformations.",
        details: "Studied point processing techniques: image negatives, log transformations, and power-law (gamma) transformations. Implemented histogram equalization.",
        image: week1Intro
    },
    {
        id: 3,
        title: "Week 3: Spatial Filtering",
        summary: "Smoothing and Sharpening filters.",
        details: "Deep dived into correlation and convolution. Applied Gaussian smoothing filters and Laplacian sharpening filters to remove noise and enhance edges.",
        image: week1Intro
    },
    {
        id: 4,
        title: "Week 4: Filtering in Frequency Domain",
        summary: "Fourier Transform basics.",
        details: "Introduction to the 2D Discrete Fourier Transform (DFT). Understood the relationship between spatial and frequency domains.",
        image: week1Intro
    },
    {
        id: 5,
        title: "Week 5: Image Restoration",
        summary: "Noise models and restoration.",
        details: "Analyzed different noise models (Gaussian, Salt & Pepper). Learned about mean filters, order-statistic filters, and adaptive filters.",
        image: week1Intro
    },
    {
        id: 6,
        title: "Week 6: Color Image Processing",
        summary: "Color models and processing.",
        details: "Explored RGB, CMY, and HSI color models. Performed pseudo-color image processing and full-color image processing.",
        image: week1Intro
    },
    {
        id: 7,
        title: "Week 7: Wavelets",
        summary: "Multi-resolution processing.",
        details: "Introduction to wavelet transforms and their application in image compression and feature extraction.",
        image: week1Intro
    },
    {
        id: 8,
        title: "Week 8: Mid-Semester Project",
        summary: "Practical application of concepts.",
        details: "Built a small application using Python/OpenCV to detect edges in real-time video feed.",
        image: week1Intro
    },
    {
        id: 9,
        title: "Week 9: Image Compression",
        summary: "Redundancy and compression standards.",
        details: "Studied coding redundancy, spatial redundancy, and irrelevant information. learned about Huffman coding and JPEG standard.",
        image: week1Intro
    },
    {
        id: 10,
        title: "Week 10: Morphological Processing",
        summary: "Erosion and Dilation.",
        details: "Applied morphological operations like erosion, dilation, opening, and closing to extract image components.",
        image: week1Intro
    },
    {
        id: 11,
        title: "Week 11: Image Segmentation I",
        summary: "Point, Line, and Edge Detection.",
        details: "Used Sobel, Prewitt, and Canny edge detectors. Learned about Hough Transform for line detection.",
        image: week1Intro
    },
    {
        id: 12,
        title: "Week 12: Image Segmentation II",
        summary: "Thresholding and Region-based segmentation.",
        details: "Implemented global and adaptive thresholding. Studied region growing and region splitting/merging techniques.",
        image: week1Intro
    },
    {
        id: 13,
        title: "Week 13: Representation & Description",
        summary: "Boundary and Regional descriptors.",
        details: "Learned how to represent regions using chain codes, signatures, and skeletons. Calculated texture descriptors.",
        image: week1Intro
    },
    {
        id: 14,
        title: "Week 14: Object Recognition",
        summary: "Patterns and Classes.",
        details: "Introduction to pattern classes and matching. Used minimum distance classifiers and correlation to recognize objects.",
        image: week1Intro
    },
    {
        id: 15,
        title: "Week 15: Final Review & Project",
        summary: "Consolidation of learning.",
        details: "Completed the final portfolio project. Reviewed all key concepts from the semester and prepared for final assessment.",
        image: week1Intro
    }
];
