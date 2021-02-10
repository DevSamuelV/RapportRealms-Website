type Props = {
  name: string;
  offence: string;
  img: string;
  date: string;
};

export function DateElement({ name, img, date, offence }: Props) {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
              {name}
            </h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
              Date: {date}
            </span>
          </div>
          <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
            Offence: {offence}
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
