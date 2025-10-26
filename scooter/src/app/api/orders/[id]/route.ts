import { NextResponse, NextRequest } from 'next/server';
import { getOrderByID, deleteOrderById } from '@/lib/services/order.service';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/db/auth.config";
import Order from "@/lib/models/orderModel";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 

  if (!id) {
    return NextResponse.json({ message: 'Order ID is required' }, { status: 400 });
  }

  try {
    const order = await getOrderByID(id);

    if (!order) {
      return NextResponse.json({ message: `Order with ID ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await Order.deleteMany({ userId: session.user.id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error clearing orders:", error);
    return NextResponse.json({ error: "Failed to clear orders" }, { status: 500 });
  }
}