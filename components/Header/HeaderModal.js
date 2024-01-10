"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Link from "next/link";
import Social from "../Social";

export default function HeaderModal({ isOpen, onOpenChange, pathname }) {
  const selected = "text-[#ffd700]";
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="full"
        className="bg-black text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="h-full flex flex-col items-center justify-center">
                <div
                  onClick={onClose}
                  className={`text-md ${pathname === "/" && selected}`}
                >
                  <Link href="/">Home</Link>
                </div>
                <div
                  onClick={onClose}
                  className={`text-md ${pathname === "/about" && selected}`}
                >
                  <Link href="/about">About</Link>
                </div>
                <div
                  onClick={onClose}
                  className={`text-md ${pathname === "/contact" && selected}`}
                >
                  <Link href="/contact">Contact</Link>
                </div>
                <div>
                  <Social fontSize="small"/>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
