import { auth, currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className="mt-10 text-start max-w-xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
        <p className="text-sm text-white">
          Welcome to your personalized dashboard!
        </p>
      </div>
      <div className="px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
        <ul className="list-none space-y-4">
          <li className="flex items-center justify-between">
            <span className="font-semibold text-white">First Name:</span>{" "}
            <span className="text-blue-400">{user.firstName}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-semibold text-white">Last Name:</span>{" "}
            <span className="text-blue-400">{user.lastName}</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-semibold text-white">Email:</span>{" "}
            <span className="text-blue-400">
              {user.emailAddresses[0].emailAddress}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
