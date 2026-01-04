function Navigation({onContentChange}){

    const handleContentChange = (e, section) => {
        e.preventDefault();
        onContentChange(section);
    }

    return (
        <nav>
            <button onClick={(e) => handleContentChange(e, 'home')}>
                Home
            </button>
            <button onClick={(e) => handleContentChange(e, 'happyDawg')}>
                Happy Dog
            </button>
            <button onClick={(e) => handleContentChange(e, 'coolDawg')}>
                Cool Dog
            </button>
        </nav>
    )
}

export default Navigation;