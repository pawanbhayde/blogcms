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

const invoices = [
  {
    srno: "001",
    date: "10/10/2021",
    category: "Development",
  },
  {
    srno: "002",
    date: "10/10/2021",
    category: "Design",
  },
  {
    srno: "003",
    date: "10/10/2021",
    category: "Roadmaps",
  },
  {
    srno: "004",
    date: "10/10/2021",
    category: "Courses",
  },
  {
    srno: "005",
    date: "10/10/2021",
    category: "UI Kits",
  },
  {
    srno: "006",
    date: "10/10/2021",
    category: "Bootcamps",
  },
  {
    srno: "007",
    date: "10/10/2021",
    category: "Goodies",
  },
];

export function Category() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sr No.</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.srno}>
            <TableCell className="font-medium">{invoice.srno}</TableCell>
            <TableCell>{invoice.category}</TableCell>
            <TableCell className="text-right">{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
