"use client";

import { Chip } from "@heroui/react";
import type { PastOfficer } from "@/types";

interface PastOfficersTableProps {
  officers: PastOfficer[];
}

/**
 * Table: Year of Service, Name, Post (gold), Status chip (Completed)
 */
export function PastOfficersTable({ officers }: PastOfficersTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left" aria-label="Past officers">
        <thead>
          <tr className="border-b border-gray-200 bg-light-bg">
            <th className="px-4 py-3 font-heading font-semibold text-text-dark text-sm uppercase tracking-wider">
              Year of Service
            </th>
            <th className="px-4 py-3 font-heading font-semibold text-text-dark text-sm uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 font-heading font-semibold text-text-dark text-sm uppercase tracking-wider">
              Post
            </th>
            <th className="px-4 py-3 font-heading font-semibold text-text-dark text-sm uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {officers.map((o) => (
            <tr key={o.id} className="border-b border-gray-100 hover:bg-gray-50/50">
              <td className="px-4 py-3 text-text-muted text-sm">
                {o.yearStart}–{o.yearEnd}
              </td>
              <td className="px-4 py-3 font-medium text-text-dark">{o.name}</td>
              <td className="px-4 py-3 text-gold font-semibold text-sm">{o.post}</td>
              <td className="px-4 py-3">
                <Chip size="sm" color="primary" variant="flat">
                  {o.status}
                </Chip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
