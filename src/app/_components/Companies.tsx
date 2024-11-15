const companiesList: { src: string; company: string }[] = [
    { src: 'amazon.png', company: 'Amazon' },
    { src: 'dribbble.png', company: 'Dribbble' },
    { src: 'hubspot.png', company: 'HubSpot' },
    { src: 'notion.png', company: 'Notion' },
    { src: 'netflix.png', company: 'Netflix' },
    { src: 'zoom.png', company: 'Zoom' },
];

const Companies = () => (
    <div className='max-w-screen-xl w-full mx-auto px-5 ~mt-20/24'>
        <div className='flex items-center justify-around lg:justify-between ~gap-8/12 flex-wrap grayscale'>
            {companiesList.map(({ src, company }, index) => (
                <img
                    key={index}
                    src={`/media/companies/${src}`}
                    alt={company}
                    className='~h-8/12'
                />
            ))}
        </div>
    </div>
);

export { Companies };
