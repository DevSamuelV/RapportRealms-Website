type Props = {
  name: string;
  username: string;
  img: string;
  active: boolean;
};

export function JailedElement({ name, img, active, username }: Props) {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
              {name}
            </h3>
            {active && (
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                Jailed
              </span>
            )}

            {!active && (
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs leading-4 font-medium bg-gray-200 rounded-full">
                Released
              </span>
            )}
          </div>
          <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
            {username}
          </p>
        </div>
        <img
          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          src={img}
          alt=""
        />
      </div>
    </li>
  );
}
