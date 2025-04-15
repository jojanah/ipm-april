
export async function getServerSideProps(context) {
    const { id } = context.params;
    let user = null;
    try {
        const response = await fetch(`http://localhost:1200/users/${id}`);
        if (response.ok) {
            const users = await response.json();
            console.log(users);
        }
        else {
            console.error("Failed to fetch user:", response.status);
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }

    return { props: { user }, };

}

export default function UserPage({ user }) {
    if (!user) {
        return <p>User not found or error fetching data.</p>;
    }

    return (
        <div>
            <ol>
                <li>{user.name}</li>
                <li>Age: {user.age}</li>
            </ol>
        </div>
    );
}