function skillsMember() {
    // This is a private function
    function getSkills() {
        return ['JavaScript', 'React', 'Node.js'];
    }

    // This is a public function
    return {
        getSkills: getSkills
    };
}