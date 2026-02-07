import { tickets } from "../../../data/ticket"

export type TicketPriority = "critical" | "high" | "medium" | "low";
export type TicketStatus = "open" | "in-progress" | "resolved";

// Support ticket details
export interface Ticket {
  id: number;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
}

export const createTicket = (
  title: string,
  description: string,
  priority: TicketPriority
): Ticket => {
  const now = new Date().toISOString();

  
  const newTicket: Ticket = {
    id: tickets.length + 1,
    title,
    description,
    priority,
    status: "open",
    createdAt: now,
    updatedAt: now,
  };

  tickets.push(newTicket);

// Return created ticket
  return newTicket;
};