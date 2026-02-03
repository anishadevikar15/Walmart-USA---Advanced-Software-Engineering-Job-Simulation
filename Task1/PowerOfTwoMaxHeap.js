package Task1;
import java.util.Arrays;
import java.util.NoSuchElementException;
import java.util.Scanner;
public class PowerOfTwoMaxHeap {

    private final int branchingFactorExponent;
    private final int branchingFactor;
    private int[] heap;
    private int size;
    private static final int DEFAULT_CAPACITY = 16;

    public PowerOfTwoMaxHeap(int branchingFactorExponent) {
        if (branchingFactorExponent < 0 || branchingFactorExponent > 30) {
            throw new IllegalArgumentException("Exponent must be between 0 and 30");
        }
        this.branchingFactorExponent = branchingFactorExponent;
        this.branchingFactor = 1 << branchingFactorExponent; // 2^k
        this.heap = new int[Math.max(DEFAULT_CAPACITY, 1)];
        this.size = 0;
    }

    public void insert(int value) {
        ensureCapacity(size + 1);
        heap[size] = value;
        siftUp(size);
        size++;
    }

    public int popMax() {
        if (size == 0) throw new NoSuchElementException("Heap is empty");
        int max = heap[0];
        int lastIndex = size - 1;
        heap[0] = heap[lastIndex];
        size--;
        if (size > 0) siftDown(0);
        return max;
    }

    public int peekMax() {
        if (size == 0) throw new NoSuchElementException("Heap is empty");
        return heap[0];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    
    private void siftUp(int index) {
        int current = heap[index];
        while (index > 0) {
            int parentIndex = (index - 1) / branchingFactor;
            if (current <= heap[parentIndex]) break;
            heap[index] = heap[parentIndex];
            index = parentIndex;
        }
        heap[index] = current;
    }

    private void siftDown(int index) {
        int current = heap[index];

        while (true) {
            long firstChild = (long) branchingFactor * index + 1L;
            if (firstChild >= size) break;

            long lastChild = Math.min(firstChild + branchingFactor - 1L, (long) size - 1L);

            int largestChildIndex = (int) firstChild;
            int largestChildValue = heap[largestChildIndex];

            for (long ci = firstChild + 1; ci <= lastChild; ci++) {
                int childVal = heap[(int) ci];
                if (childVal > largestChildValue) {
                    largestChildValue = childVal;
                    largestChildIndex = (int) ci;
                }
            }

            if (current >= largestChildValue) break;

            heap[index] = largestChildValue;
            index = largestChildIndex;
        }

        heap[index] = current;
    }

    private void ensureCapacity(int minCapacity) {
        if (minCapacity <= heap.length) return;
        int newCap = heap.length + (heap.length >> 1);
        if (newCap < minCapacity) newCap = minCapacity;
        heap = Arrays.copyOf(heap, newCap);
    }

    private String internalArrayString() {
        if (size == 0) return "[]";
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < size; i++) {
            sb.append(heap[i]);
            if (i < size - 1) sb.append(", ");
        }
        sb.append("]");
        return sb.toString();
    }

    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("WELCOME TO POWER-OF-TWO MAX HEAP");

        int k = -1;
        while (k < 0) {
            System.out.print("Enter exponent k (0..30) so heap has 2^k children per parent: ");
            String line = sc.nextLine().trim();
            try {
                k = Integer.parseInt(line);
                if (k < 0 || k > 30) {
                    System.out.println("Please enter a valid integer between 0 and 30.");
                    k = -1;
                }
            } catch (NumberFormatException e) {
                System.out.println("Not an integer. Try again.");
            }
        }

        PowerOfTwoMaxHeap heap = new PowerOfTwoMaxHeap(k);

        while (true) {
            System.out.println("\n--- MENU ---");
            System.out.println("1) Insert values (space-separated allowed)");
            System.out.println("2) Pop max");
            System.out.println("3) Peek max");
            System.out.println("4) Size");
            System.out.println("5) Is empty?");
            System.out.println("6) Print internal array (debug)");
            System.out.println("7) Exit");
            System.out.print("Choice: ");

            String choiceLine = sc.nextLine().trim();
            if (choiceLine.isEmpty()) {
                System.out.println("Please enter a choice.");
                continue;
            }

            int choice;
            try {
                choice = Integer.parseInt(choiceLine);
            } catch (NumberFormatException e) {
                System.out.println("Invalid choice (not an integer).");
                continue;
            }

            switch (choice) {
                case 1:
                    System.out.print("Enter integer(s) to insert (space-separated): ");
                    String valuesLine = sc.nextLine().trim();
                    if (valuesLine.isEmpty()) {
                        System.out.println("No values entered. Insert cancelled.");
                        break;
                    }

                    String[] tokens = valuesLine.split("\\s+");
                    int insertedCount = 0;
                    int skippedCount = 0;
                    for (String tok : tokens) {
                        try {
                            int v = Integer.parseInt(tok);
                            heap.insert(v);
                            insertedCount++;
                        } catch (NumberFormatException ex) {
                            System.out.println("Skipping invalid token: \"" + tok + "\"");
                            skippedCount++;
                        }
                    }
                    System.out.println("Inserted " + insertedCount + " value(s). Skipped " + skippedCount + " invalid token(s).");
                    System.out.println("Current size: " + heap.size());
                    if (!heap.isEmpty()) {
                        System.out.println("Current max (peek): " + heap.peekMax());
                    }
                    break;

                case 2:
                    try {
                        int popped = heap.popMax();
                        System.out.println("Popped max: " + popped + ". Current size: " + heap.size());
                    } catch (NoSuchElementException e) {
                        System.out.println("Heap is empty. Nothing to pop.");
                    }
                    break;

                case 3:
                    try {
                        System.out.println("Max (peek): " + heap.peekMax());
                    } catch (NoSuchElementException e) {
                        System.out.println("Heap is empty.");
                    }
                    break;

                case 4:
                    System.out.println("Heap size: " + heap.size());
                    break;

                case 5:
                    System.out.println(heap.isEmpty() ? "Heap is empty" : "Heap is NOT empty");
                    break;

                case 6:
                    System.out.println("Internal array (size=" + heap.size() + "): " + heap.internalArrayString());
                    break;

                case 7:
                    System.out.println("Exiting. Goodbye!");
                    sc.close();
                    return;

                default:
                    System.out.println("Unknown choice. Try again.");
            }
        }
    }
}