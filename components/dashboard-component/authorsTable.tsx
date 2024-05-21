import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";

const authors = [
  {
    srno: "001",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    insta: "johndoe",
    twitter: "johndoe",
  },
  {
    srno: "002",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    insta: "johndoe",
    twitter: "johndoe",
  },
  {
    srno: "003",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    insta: "johndoe",
    twitter: "johndoe",
  },
  {
    srno: "004",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    insta: "johndoe",
    twitter: "johndoe",
  },
  {
    srno: "005",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "John Doe",
    insta: "johndoe",
    twitter: "johndoe",
  },
];

export function Authors() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr No.</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Instagram</TableHead>
          <TableHead>Twitter</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {authors.map((authors) => (
          <TableRow key={authors.srno}>
            <TableCell className="font-medium">{authors.srno}</TableCell>

            <TableCell>
              <img
                src={authors.image}
                className="rounded-full"
                width={50}
                height={50}
                alt="image"
              />
            </TableCell>
            <TableCell>{authors.name}</TableCell>
            <TableCell>
              <Link
                href={`https://www.instagram.com/` + authors.insta}
                target="_blank"
              >
                <Icons.instagram />
              </Link>
            </TableCell>
            <TableCell>
              <Link
                href={`https://www.twitter.com/` + authors.twitter}
                target="_blank"
              >
                <Icons.twitter />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
