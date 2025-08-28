"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Chip,
} from "@heroui/react";
import { useState } from "react";
import { MoreHorizontal, Star, ChevronLeft, ChevronRight } from "lucide-react";

type Driver = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive" | "Suspended" | string;
  rating: number;
  location: string;
};

interface DriversTableProps {
  drivers: Driver[];
  loading?: boolean;
  error?: any;
  page: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function DriversTable({
  drivers,
  loading,
  error,
  page,
  totalPages = 1,
  onPageChange,
}: DriversTableProps) {
  const [currentPage, setCurrentPage] = useState(page);

  // sync internal page state when parent changes
  if (currentPage !== page) setCurrentPage(page);

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    onPageChange?.(p);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-yellow-100 text-yellow-700";
      case "Suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return <div className="p-4 text-gray-500">Loading drivers...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Failed to load drivers.</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow">
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <Table
          aria-label="Drivers table"
          selectionMode="none"
          bottomContent={
            <div className="flex items-center justify-between border-t px-4 py-3">
              <Button
                variant="light"
                size="sm"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                isDisabled={currentPage === 1}
                startContent={<ChevronLeft className="w-4 h-4" />}
              >
                Previous
              </Button>

              <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <Button
                      key={p}
                      variant={p === currentPage ? "solid" : "light"}
                      size="sm"
                      onClick={() => handlePageChange(p)}
                    >
                      {p}
                    </Button>
                  )
                )}
              </div>

              <div className="sm:hidden text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </div>

              <Button
                variant="light"
                size="sm"
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                isDisabled={currentPage === totalPages}
                endContent={<ChevronRight className="w-4 h-4" />}
              >
                Next
              </Button>
            </div>
          }
        >
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Phone</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Rating</TableColumn>
            <TableColumn>Location</TableColumn>
            <TableColumn align="end">Actions</TableColumn>
          </TableHeader>

          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar
                      name={driver.name.slice(0, 1)}
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      alt="Driver Avatar"
                      size="sm"
                    />
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-gray-500">{driver.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>
                  <Chip className={getStatusColor(driver.status)} variant="flat">
                    {driver.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{driver.rating}</span>
                  </div>
                </TableCell>
                <TableCell>{driver.location}</TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly variant="light" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Driver actions">
                      <DropdownItem key="view">View</DropdownItem>
                      <DropdownItem key="edit">Edit</DropdownItem>
                      <DropdownItem key="delete" color="danger">
                        Delete
                      </DropdownItem>
                      <DropdownItem key="notify">
                        Send Notification
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden p-4">
        {drivers.map((driver) => (
          <Card key={driver.id} shadow="sm" className="mb-4 border-b py-4">
            <CardHeader className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar
                  name={driver.name.slice(0, 1)}
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="Driver Avatar"
                  size="sm"
                />
                <div>
                  <p className="font-medium">{driver.name}</p>
                  <p className="text-sm text-gray-500">{driver.email}</p>
                </div>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant="light" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Driver actions">
                  <DropdownItem key="view">View</DropdownItem>
                  <DropdownItem key="edit">Edit</DropdownItem>
                  <DropdownItem key="delete" color="danger">
                    Delete
                  </DropdownItem>
                  <DropdownItem key="notify">Send Notification</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <CardBody className="space-y-2">
              <p className="flex justify-between text-sm">
                <span className="text-gray-500">Phone:</span>
                <span>{driver.phone}</span>
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status:</span>
                <Chip className={getStatusColor(driver.status)} variant="flat">
                  {driver.status}
                </Chip>
              </div>
              <p className="flex justify-between text-sm">
                <span className="text-gray-500">Rating:</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {driver.rating}
                </span>
              </p>
              <p className="flex justify-between text-sm">
                <span className="text-gray-500">Location:</span>
                <span>{driver.location}</span>
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
