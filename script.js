// Data for projects
const projectData = {
    project1: {
        image: "Images/Golf GTI TC.png",
        title: "Golf GTI TCR",
        description: "The master of speed and performance on both road and track."
    },
    project2: {
        image: "Images/Golf.png",
        title: "Volkswagen Golf MK2",
        description: "A timeless classic combining retro style with modern flair."
    },
    project3: {
        image: "Images/Jeep.png",
        title: "Jeep Wrangler",
        description: "Ready for any adventure, from city roads to rugged trails."
    },
    project4: {
        image: "Images/Lamborghini.png",
        title: "Lamborghini Aventador",
        description: "A dream car with speed and style that turns every head."
    },
    project5: {
        image: "Images/Retro.png",
        title: "Retro Cars",
        description: "Vintage elegance and charm with timeless appeal."
    },
    project6: {
        image: "Images/Royal Enfield.png",
        title: "Royal Enfield",
        description: "The perfect fusion of retro style and modern performance."
    }
};

// Open Modal
function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        document.getElementById("modalImage").src = project.image;
        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDescription").textContent = project.description;
        document.getElementById("projectModal").style.display = "flex";
    }
}

// Close Modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Event listeners
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        openModal(project.getAttribute('data-id'));
    });
});

document.querySelector('.close').addEventListener('click', closeModal);