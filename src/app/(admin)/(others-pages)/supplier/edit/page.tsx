'use client'
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import PhoneInput from "@/components/form/group-input/PhoneInput";
import { ChevronLeftIcon } from "@/icons";

export default function Jenis() {
     const countries = [
    { code: "ID", label: "+62" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };
  return (
    <div>
        <div className="flex justify-between">
        <h1 className="text-white text-xl font-bold">Edit Supplier</h1>
    <div className="mb-5">
        <Link
          href="/supplier"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Kembali Ke Halaman Data Supplier
        </Link>
    </div>
    </div>
        <ComponentCard title="Edit Supplier" className="mb-5">
        <form className="space-y-6">
          <div>
            <Label>Kode Jenis</Label>
            <Input defaultValue={'00001'} disabled></Input>
          </div>
            <div>
                <Label>Nama Supplier</Label>
                <Input></Input>
            </div>
            <div className="flex justify-between">
                <div className="w-[70%]">
                    <Label>Alamat</Label>
                    <Input></Input>
                </div>
                <div className="w-[28%]">
                    <Label>Kota</Label>
                    <Input></Input>
                </div>
            </div>
            <div>
          <Label>Syarat Bayar</Label>
          <div className="flex items-center gap-x-3">
            <Input></Input>
            <Label>Hari</Label>
          </div>
        </div>
        <div>
            <Label>No Telp</Label>
            <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
            <Label>Nama Kontak</Label>
            <Input></Input>
        </div>
        <div>
            <Label>Ket. Bank</Label>
            <Input></Input>
        </div>
            <div>
            <Button size="md" variant="primary">
              Ubah Data
            </Button>
            </div>
        </form>
        </ComponentCard>
    </div>
  );
}
